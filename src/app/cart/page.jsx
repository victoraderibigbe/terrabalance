"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "@/store/cartSlice";
import MyBreadcrumb from "@/components/MyBreadcrumb";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-5 md:px-10">
      {/* Breadcrumb */}
      <MyBreadcrumb />

      <h1 className="text-2xl font-bold my-5">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="max-w-sm">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p>
                    {item.quantity} x ₦{item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white p-2 rounded mt-4"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
