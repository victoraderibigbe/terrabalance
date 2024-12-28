"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSlide = ({ title, imageLarge, route }) => {
  const router = useRouter();

  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <Image
        src={imageLarge}
        alt="Background image containing seasoned meat"
        className="object-cover h-full"
      />
      <div className="absolute px-10 w-full max-w-3xl left-2 md:left-10">
        <h1 className="text-white leading-normal">{title}</h1>
        <button
          onClick={() => router.push(route)}
          className="rounded-full border border-accentYellow hover:bg-secondaryBrown transition px-5 py-3 text-accentYellow mt-8 font-semibold lg:px-10 lg:py-5 bg-primaryBrown"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
