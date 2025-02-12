"use client";

import ThemeToggle from "@/components/ThemeToggle";
import withAuth from "@/components/withAuth";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack, MdOutlineDiscount } from "react-icons/md";

const CheckoutPage = () => {
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
              <p>Item's total (1)</p>
              <p>₦ 2,500</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Delivery Fees</p>
              <p>₦ 800</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">₦ 3,300</p>
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
              <button>Change</button>
            </div>
            <div>
              <p className="my-0">John Doe</p>
              <small>Adenike Area, Ogbomoso, Oyo, Nigeria.</small>
            </div>
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
              <small>Delivery between 19 February and 21 February.</small>
            </div>
            <div>
              <p className="my-0 font-semibold">Shipment</p>
              <div className="border py-2 rounded-lg flex items-center gap-2 my-2">
                <div></div>
                <div>
                  <p className="my-0">
                    AM And PM SPF 30 Facial Moisturizing Lotion, 3oz Each
                  </p>
                  <small>QTY: 1</small>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-primaryBrown dark:bg-secondaryBrown text-neutralLight px-4 py-2 rounded-lg">
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
                <p>Item's total (1)</p>
                <p>₦ 2,500</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Delivery Fees</p>
                <p>₦ 800</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">₦ 3,300</p>
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
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 lg:hidden">
        <button className="bg-primaryBrown dark:bg-secondaryBrown w-full p-5 rounded-lg text-neutralLight">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default withAuth(CheckoutPage);
