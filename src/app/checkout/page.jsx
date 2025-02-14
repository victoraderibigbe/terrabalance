"use client";

import AddressDrawer from "@/components/AddressDrawer";
import ThemeToggle from "@/components/ThemeToggle";
import withAuth from "@/components/withAuth";
import { fetchAddresses } from "@/store/addressSlice";
import { toggleDrawer } from "@/store/drawerSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MdAdd, MdArrowBack, MdOutlineDiscount } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
const CheckoutPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { user, userId } = useSelector((state) => state.auth);
  const { addresses, isSelected } = useSelector((state) => state.address);
  const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const selectedAddress = addresses.find(
    (address) => address._id === isSelected
  );

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchAddresses(userId));
    }
  }, [userId, dispatch]);

  return (
    <div>
      <nav className="sticky top-0">
        <div className="flex items-center justify-between lg:hidden p-5 bg-black text-neutralLight">
          <div className="flex items-center gap-3">
            <Link href={"cart"}>
              <MdArrowBack size={20} />
            </Link>
            <h4>Place your order</h4>
          </div>
          <ThemeToggle />
        </div>

        <div className="hidden lg:flex items-center justify-between px-24 py-5 bg-neutralLight dark:bg-darkerGray">
          <Link href={"/"} className="flex items-center gap-1 !no-underline">
            <Image
              src={"/terra-logo.png"}
              alt="Terra Balance logo"
              width={30}
              height={30}
            />
            <p className="font-semibold text-base md:text-lg lg:text-xl">
              Terra Balance
            </p>
          </Link>

          <h4>Place your order</h4>

          <ThemeToggle />
        </div>
      </nav>

      <div className="flex flex-col gap-2 lg:hidden">
        <div className="px-4 py-2 bg-neutralLight dark:bg-darkerGray">
          <small>
            By proceeding, you are automatically accepting our{" "}
            <Link
              href={"#"}
              className="text-primaryGreen dark:text-secondaryGreen text-xs my-0"
            >
              Terms & Conditions
            </Link>
          </small>
        </div>

        <div className="px-4 py-2 bg-neutralLight dark:bg-darkerGray">
          <div className="border-b">
            <h6 className="text-primaryGreen dark:text-secondaryGreen font-bold">
              Order Summary
            </h6>
          </div>
          <div className="border-b">
            <div className="flex items-center justify-between">
              <p>Item's total ({cartItems.length})</p>
              <p>₦{getTotalPrice()}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Delivery Fees</p>
              <p>₦800</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">₦{getTotalPrice() + 800}</p>
            </div>
          </div>
          <div className="flex item-center gap-2 py-3">
            <div className="flex items-center flex-wrap border border-foreground text-foreground rounded-lg px-2">
              <MdOutlineDiscount
                size={20}
                className="text-primaryGreen dark:text-secondaryGreen"
              />
              <input
                type="text"
                className="border-none focus:ring-0 bg-transparent"
                placeholder="Enter code here"
              />
            </div>
            <button>Apply Coupon</button>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-3 gap-3 lg:px-24 lg:py-10">
        <div className="col-span-2 flex flex-col gap-2 lg:gap-3">
          <div className="bg-neutralLight dark:bg-darkerGray mt-2 lg:mt-0 lg:rounded-xl px-4 py-2 lg:p-5">
            <div className="border-b pb-1 mb-2 flex items-center justify-between">
              <h6 className="text-primaryGreen dark:text-secondaryGreen font-bold">
                Payment Method
              </h6>
              <button>Change</button>
            </div>
            <div>
              <p className="my-0">Pay with Cards, Bank Transfer or USSD</p>
              <small>You will be redirected to secure checkout page</small>
            </div>
          </div>
          <div className="bg-neutralLight dark:bg-darkerGray lg:rounded-xl px-4 py-2 lg:p-5">
            <div className="border-b pb-1 mb-2 flex items-center justify-between">
              <h6 className="text-primaryGreen dark:text-secondaryGreen font-bold">
                Delivery Address
              </h6>
              <button onClick={() => dispatch(toggleDrawer())}>Change</button>
            </div>
            {user && selectedAddress ? (
              <div>
                <p className="my-0">
                  {user?.firstName} {user?.lastName}
                </p>
                <small>
                  {selectedAddress?.street}, {selectedAddress?.city},{" "}
                  {selectedAddress?.state}, {selectedAddress?.country},{" "}
                  {selectedAddress?.zipCode}
                </small>
              </div>
            ) : (
              <div>
                <p>No address found</p>
                <button
                  onClick={() => dispatch(toggleDrawer())}
                  className="flex items-center gap-1"
                >
                  Click to add delivery address <MdAdd />
                </button>
              </div>
            )}
          </div>
          <div className="bg-neutralLight dark:bg-darkerGray lg:rounded-xl px-4 py-2 lg:p-5 flex flex-col gap-3">
            <div className="border-b pb-1 mb-2 flex items-center justify-between">
              <h6 className="text-primaryGreen dark:text-secondaryGreen font-bold">
                Delivery Details
              </h6>
              <button>Change</button>
            </div>
            <div>
              <p className="my-0 font-semibold">Home Delivery</p>
              <small>Delivery in less than 14 days</small>
            </div>
            <div>
              <p className="my-0 font-semibold">Shipment</p>
              <div className="border p-2 rounded-lg max-h-56 overflow-auto">
                {cartItems?.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 my-2">
                    <div>
                      <Image
                        src={item?.image}
                        alt={item?.title}
                        width={100}
                        height={100}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="my-0">{item?.title}</p>
                      <small>QTY: {item?.quantity}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => router.push("/cart")}
                className="bg-primaryBrown dark:bg-secondaryBrown text-neutralLight px-4 py-2 rounded-lg"
              >
                Modify Cart
              </button>
            </div>
          </div>

          <div className="bg-neutralLight dark:bg-darkerGray lg:rounded-xl px-4 py-2 lg:p-5 flex flex-col gap-3 mb-5">
            <Link href={"/cart"} className="flex items-center gap-2">
              <MdArrowBack size={20} />
              Go back and continue shopping
            </Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="p-5 bg-neutralLight dark:bg-darkerGray rounded-xl">
            <div className="border-b mt-3 lg:mt-0">
              <h6 className="text-primaryGreen dark:text-secondaryGreen font-bold">
                Order Summary
              </h6>
            </div>
            <div className="border-b">
              <div className="flex items-center justify-between">
                <p>Item's total ({cartItems.length})</p>
                <p>₦{getTotalPrice()}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Delivery Fees</p>
                <p>₦800</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">₦{getTotalPrice() + 800}</p>
              </div>
            </div>
            <div className="flex item-center flex-wrap gap-2 py-3 border-b">
              <div className="flex items-center border border-foreground text-foreground rounded-lg px-2">
                <MdOutlineDiscount
                  size={20}
                  className="text-primaryGreen dark:text-secondaryGreen"
                />
                <input
                  type="text"
                  className="border-none focus:ring-0 bg-transparent"
                  placeholder="Enter code here"
                />
              </div>
              <button>Apply Coupon</button>
            </div>

            <div className="py-3">
              <button className="bg-primaryBrown dark:bg-secondaryBrown w-full p-3 rounded-lg text-neutralLight">
                Confirm Order (₦{getTotalPrice() + 800})
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 lg:hidden">
        <button className="bg-primaryBrown dark:bg-secondaryBrown w-full p-5 rounded-lg text-neutralLight">
          Confirm Order (₦{getTotalPrice() + 800})
        </button>
      </div>

      {isDrawerOpen && <AddressDrawer />}
    </div>
  );
};

export default withAuth(CheckoutPage);
