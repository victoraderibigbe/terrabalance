"use client";

import { addToCart, removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

const MyProductCard = ({ product }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

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
    }
  };

  return (
    <div className="rounded-lg max-w-[11rem] md:max-w-[18rem] w-full hover:shadow-md bg-neutralLight dark:bg-[#1F2937]">
      <div className="h-48 overflow-hidden rounded-t-lg">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-2 md:p-3 lg:p-5">
        <h5>{product.title}</h5>
        <i className="text-sm md:text-base lg:text-lg">{product.weight}g</i>
        <p className="text-sm md:text-base lg:text-lg font-semibold my-1">
          ₦ {product.price}
        </p>
        {isButtonClicked ? (
          <div className="flex items-center justify-between border border-primaryGreen dark:border-secondaryGreen rounded-lg px-2 md:px-5 py-1 md:h-12 w-full">
            <button
              id="decrement"
              className={`text-foreground ${
                quantity <= 1 ? " opacity-50" : ""
              }`}
              disabled={quantity <= 1}
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
            className="bg-primaryGreen px-2 py-2 rounded-lg font-semibold text-neutralLight text-sm md:text-base lg:text-lg md:px-3 w-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProductCard;
