"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCartArrowDown } from "react-icons/fa";

const HeroSlide = ({ title, subtitle, image, route, key }) => {
  const router = useRouter();

  return (
    <div
      key={key}
      className="flex h-full items-center justify-center bg-black dark:text-neutralLight"
    >
      <Image
        src={image}
        alt="Background Image"
        width={1600}
        height={500}
        className="object-cover h-full opacity-40"
      />
      <div className="absolute px-10 w-full max-w-3xl left-2 md:left-10">
        <h1 className="text-neutralLight leading-normal mb-5">{title}</h1>
        <h3 className="text-neutralGray">{subtitle}</h3>
        <button
          onClick={() => router.push(route)}
          className="rounded-full hover:opacity-90 transition px-10 py-3 text-neutralLight mt-10 font-semibold lg:px-24 lg:py-5 bg-secondaryBrown text-xl flex items-center gap-2"
        >
          <FaCartArrowDown size={20} /> Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
