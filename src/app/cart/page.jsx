"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/store/cartSlice";
import MyBreadcrumb from "@/components/MyBreadcrumb";
import { Table } from "flowbite-react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineDeleteForever } from "react-icons/md";
import Link from "next/link";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="p-5 md:px-10">
      {/* Breadcrumb */}
      <MyBreadcrumb />

      {cartItems.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
          <div className="p-5 text-center">
            <p>Your cart is empty.</p>
            <p>
              To add items, visit the{" "}
              <Link href="/products" className="text-primaryGreen hover:text-secondaryGreen">
                Product Catalog
              </Link>
            </p>
          </div>
          <div>
            <Image
              src={"images/empty-cart.svg"}
              alt="Empty cart"
              width={500}
              height={500}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 my-5">
          <div className=" col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h3>Shopping Cart</h3>
              <button
                className="hover:text-primaryBrown dark:hover:text-secondaryBrown flex items-center justify-start"
                onClick={handleClearCart}
              >
                <MdOutlineDeleteForever size={20} />
                Empty Cart
              </button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <Table.HeadCell>Product</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Quantity</Table.HeadCell>
                  <Table.HeadCell>Total</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Delete</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {cartItems.map((item) => (
                    <Table.Row
                      key={item.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center justify-start gap-5 min-w-56">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="rounded-xl"
                        />
                        {item.title}
                      </Table.Cell>
                      <Table.Cell>₦{item.price}</Table.Cell>
                      <Table.Cell>{item.quantity}</Table.Cell>
                      <Table.Cell>₦{item.quantity * item.price}</Table.Cell>
                      <Table.Cell>
                        <FaTimes
                          className="cursor-pointer"
                          color="red"
                          onClick={() => handleRemoveFromCart(item.id)}
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
          <div>
            <h4>Order Summary</h4>
            <div className="py-5 my-5 border-y">
              <div className="flex items-center justify-between">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-semibold">₦{getTotalPrice()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Saving</span>
                <span className="font-semibold text-red-500">-₦0</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery</span>
                <span className="font-semibold">Free</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Estimated Total</span>
              <span className="font-semibold">₦{getTotalPrice()}</span>
            </div>
            <button className="bg-primaryBrown dark:bg-secondaryBrown py-3 px-5 rounded-xl text-neutralLight w-full mt-5 hover:opacity-90">
              Proceed to Checkout (₦{getTotalPrice()})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
