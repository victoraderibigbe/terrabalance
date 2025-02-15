"use client";

import { Card } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductCard = ({ image, alt, title, route, key }) => {
  const router = useRouter();
  return (
    <Card
      key={key}
      className="max-w-full md:max-w-sm"
      imgAlt={alt}
      imgSrc={image}
    >
      <h3 className="tracking-tight text-gray-900 dark:text-white">{title}</h3>
      <button
        onClick={() => router.push(route)}
        className="text-primaryGreen transition font-semibold flex items-center gap-2 hover:underline underline-offset-4 text-base md:text-lg tracking-wide"
      >
        Shop Now <FaArrowRightLong />
      </button>
    </Card>
  );
};

export default ProductCard;
