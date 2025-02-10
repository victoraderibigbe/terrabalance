"use client";

import { toggleAddressForm, toggleDrawer } from "@/store/drawerSlice";
import { Drawer } from "flowbite-react";
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

const MyDrawer = () => {
  const dispatch = useDispatch();
  const { isDrawerOpen, isAddressFormOpen } = useSelector(
    (state) => state.drawer
  );

  const handleClose = () => dispatch(toggleDrawer());

  let addresses = [];

  if (localStorage["addresses"]) {
    addresses = JSON.parse(localStorage["addresses"]);
  }

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
          <div className="flex items-center justify-between gap-2">
            <button className="border border-foreground text-foreground transparent rounded-full px-6 lg:px-10 py-2 flex items-center gap-1 lg:gap-2 w-full">
              <MdDeliveryDining size={20} />
              Delivery
            </button>
            <button className="border border-gray-300 text-gray-600 transparent rounded-full px-6 lg:px-10 py-2 flex items-center gap-1 lg:gap-2 w-full">
              <MdShoppingBag size={20} />
              Pickup
            </button>
          </div>

          {!isAddressFormOpen && (
            <div className="my-5">
              {addresses.map((address, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-2 text-sm my-5"
                >
                  <input
                    type="radio"
                    name="preferredAddress"
                    className="cursor-pointer"
                  />
                  <label htmlFor="preferredAddress" className="flex-1">
                    {address.street}, {address.city}, {address.state},{" "}
                    {address.country}, {address.zipCode},
                  </label>
                  <MdDelete size={20} className="cursor-pointer" />
                </div>
              ))}
            </div>
          )}

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

          {!isAddressFormOpen && (
            <button
              className="flex items-center gap-2 text-red-foreground mt-3"
              onClick={() => dispatch(toggleAddressForm())}
            >
              Add delivery address <FaPlus />
            </button>
          )}
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MyDrawer;
