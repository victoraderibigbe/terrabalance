"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

const SubHeroSlide = ({ title, image, route, key }) => {
  const router = useRouter();

  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-neutralLight relative rounded-xl">
      <Image
        src={image}
        alt=""
        objectFit="cover"
        placeholder="blur"
        className="h-full opacity-10"
      />
      <div className="absolute px-10 w-full max-w-3xl left-2 md:left-0">
        <h2 className="leading-normal mb-5 text-primaryBrown">{title}</h2>
        <button
          onClick={() => router.push(route)}
          className="text-accentYellow transition font-semibold flex items-center gap-2 hover:underline underline-offset-4 text-lg tracking-wide"
        >
          Shop Now <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default SubHeroSlide;
