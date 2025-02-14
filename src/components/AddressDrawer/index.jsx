"use client";

import { toggleAddressForm, toggleDrawer } from "@/store/drawerSlice";
import { Drawer, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdArrowBack,
  MdDelete,
  MdDeliveryDining,
  MdShoppingBag,
} from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AddressForm from "../AddressForm";
import { useEffect } from "react";
import Link from "next/link";
import {
  deleteAddress,
  fetchAddresses,
  setDeliveryClick,
  setPickupClick,
  setPreferredAddress,
} from "@/store/addressSlice";
import toast from "react-hot-toast";

const MyDrawer = () => {
  const dispatch = useDispatch();
  const { isDrawerOpen, isAddressFormOpen } = useSelector(
    (state) => state.drawer
  );
  const { addresses, loading, isSelected, isDeliveryClick, isPickupClick } =
    useSelector((state) => state.address);

  const handleDeliveryClick = () => {
    dispatch(setDeliveryClick());
  };

  const handlePickupClick = () => {
    dispatch(setPickupClick());
  };

  const handleClose = () => dispatch(toggleDrawer());

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    if (userId) {
      dispatch(fetchAddresses(userId));
    }
  }, [userId, dispatch]);

  const handleDeleteAddress = async (addressId) => {
    try {
      const remove = await dispatch(deleteAddress(addressId));

      if (!deleteAddress.fulfilled.match(remove)) {
        toast.error(remove.payload || "Failed to delete address");
        return;
      }

      toast.success("Address deleted successfully");
      dispatch(fetchAddresses(userId));
    } catch (error) {
      toast.error("Failed to delete address");
      dispatch(fetchAddresses(userId));
    }
  };

  const handleAddressChange = async (addressId) => {
    await dispatch(setPreferredAddress({ addressId, userId }));
  };

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={handleClose}
        position="right"
        className="lg:w-96"
      >
        <Drawer.Header
          title="Delivery Options"
          titleIcon={HiOutlineLocationMarker}
        />
        <Drawer.Items>
          {/* Delivery method buttons */}
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={handleDeliveryClick}
              className={`${
                isDeliveryClick
                  ? "border-foreground text-foreground"
                  : "border-gray-300 text-gray-600 dark:border-gray-400 dark:text-gray-400"
              } border transparent rounded-full px-6 lg:px-10 py-2 flex items-center gap-1 lg:gap-2 w-full`}
            >
              <MdDeliveryDining size={20} />
              Delivery
            </button>
            <button
              onClick={handlePickupClick}
              className={`${
                isPickupClick
                  ? "border-foreground text-foreground"
                  : "border-gray-300 text-gray-600 dark:border-gray-400 dark:text-gray-400"
              } border transparent rounded-full px-6 lg:px-10 py-2 flex items-center gap-1 lg:gap-2 w-full`}
            >
              <MdShoppingBag size={20} />
              Pickup
            </button>
          </div>

          {/* Home Delivery option */}
          {isDeliveryClick && (
            <div>
              {!isAddressFormOpen && (
                <div className="my-5">
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <Spinner color="success" /> Loading addresses...
                    </div>
                  ) : addresses.length === 0 ? (
                    <div>
                      <div>No address found</div>
                      <button
                        className="flex items-center gap-2 text-red-foreground mt-3"
                        onClick={() => dispatch(toggleAddressForm())}
                      >
                        Add delivery address <FaPlus />
                      </button>
                    </div>
                  ) : (
                    <div>
                      {/* Display all addresses */}
                      {addresses.map((address, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between gap-2 text-sm my-5"
                        >
                          <input
                            type="radio"
                            name="preferredAddress"
                            checked={isSelected === address._id}
                            onChange={() => handleAddressChange(address._id)}
                            className="cursor-pointer"
                          />
                          <label htmlFor="preferredAddress" className="flex-1">
                            {address.street}, {address.city}, {address.state},{" "}
                            {address.country}, {address.zipCode}
                          </label>
                          <MdDelete
                            onClick={() => handleDeleteAddress(address._id)}
                            size={20}
                            className="cursor-pointer"
                          />
                        </div>
                      ))}
                      <button
                        className="flex items-center gap-2 text-red-foreground mt-3"
                        onClick={() => dispatch(toggleAddressForm())}
                      >
                        Add delivery address <FaPlus />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Address form */}
              {isAddressFormOpen && (
                <div className="my-5">
                  <span
                    onClick={() => dispatch(toggleAddressForm())}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <MdArrowBack /> Back to my addresses
                  </span>
                  <h5 className="my-3">Add an address to start ordering</h5>
                  <AddressForm />
                </div>
              )}
            </div>
          )}

          {/* Pickup option */}
          {isPickupClick && (
            <div className="mt-5">
              <div className="mb-3">
                <h5>Office Address:</h5>
                <p className="my-0">
                  Phase 2 road, Obafemi Awolowo University Teaching Hospital,
                  Ile-Ife, Nigeria
                </p>
              </div>

              <div>
                <h5>Phone Number(s):</h5>
                <Link href={"tel:+2348168131939"}>+2348168131939</Link>,{" "}
                <Link href={"tel:+2347045347214"}>+2347045347214</Link>
              </div>
            </div>
          )}
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MyDrawer;
