"use client";

import { addToCart, removeFromCart } from "@/store/cartSlice";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AddToCartButton = ({ product }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the product is already in the cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setIsButtonClicked(true);
      setQuantity(existingItem.quantity);
    }
  }, []);

  const handleClick = () => {
    setIsButtonClicked(true);
    dispatch(addToCart(product));
  };

  const handleIncrement = () => {
    dispatch(addToCart(product));
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(removeFromCart(product.id));
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      dispatch(removeFromCart(product.id));
      setIsButtonClicked(false);
      setQuantity(1);
    }
  };

  return (
    <div>
      {isButtonClicked ? (
        <div className="flex items-center justify-between border border-primaryBrown dark:border-secondaryBrown rounded-full px-10 h-16 w-full max-w-sm">
          <button
            id="decrement"
            className="text-foreground"
            onClick={handleDecrement}
          >
            <FaMinus />
          </button>
          <input
            type="number"
            value={quantity}
            min="1"
            readOnly
            className="w-10 md:pl-2 p-0 border-none text-foreground focus:ring-0 bg-transparent text-center font-semibold text-lg"
          />
          <button
            id="increment"
            className="text-foreground"
            onClick={handleIncrement}
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="bg-primaryBrown border-primaryBrown text-neutralLight px-10 h-16 w-full gap-3 rounded-full font-semibold max-w-sm"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
