"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSlide = ({ title, subtitle, image, route, key }) => {
  const router = useRouter();

  return (
    <div
      key={key}
      className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-neutralLight"
    >
      <Image
        src={image}
        alt=""
        className="object-cover h-full"
        placeholder="blur"
      />
      <div className="absolute px-10 w-full max-w-3xl left-2 md:left-10">
        <h1 className="text-accentYellow leading-normal mb-5">{title}</h1>
        <h3 className="text-neutralLight">{subtitle}</h3>
        <button
          onClick={() => router.push(route)}
          className="rounded-full border border-accentYellow hover:bg-secondaryBrown transition px-5 py-3 text-accentYellow mt-10 font-semibold lg:px-10 lg:py-5 bg-primaryBrown"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
