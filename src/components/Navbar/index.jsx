"use client";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";
import ThemeToggle from "../ThemeToggle";
import MenuToggle from "../MenuToggle";
import { useState } from "react";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="p-3 border-b border-neutralGray md:p-5">
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center gap-2 lg:gap-5">
          <MenuToggle />
          <div className="flex items-center gap-1">
            <Image
              src={"/terra-logo.png"}
              alt="Terra Balance logo"
              width={30}
              height={30}
            />
            <p className="font-semibold text-base md:text-lg lg:text-xl">
              Terra Balance
            </p>
          </div>
        </div>
        <div className="hidden lg:flex">
          <button className="h-16 px-5 flex items-center gap-2 border-2 text-primaryGreen border-primaryGreen hover:border-secondaryGreen hover:text-secondaryGreen rounded-full text-xl transition">
            <BiCategory className="text-2xl" /> Categories
          </button>
        </div>
        <div className="md:flex justify-start gap-2 px-5 h-16 items-center border border-neutralGray rounded-full hidden flex-1">
          <CiSearch className="text-3xl" />
          <input
            type="search"
            name="search"
            id="search"
            className="w-full border-none focus:ring-0 bg-transparent"
            placeholder="Search for products"
            autoFocus
          />
        </div>
        <div className="hidden lg:block">
          <p className="my-0 font-[600]">Delivery</p>
          <p className="my-0 flex items-center">
            <span>Set your address</span>
            <MdExpandMore className="text-2xl" />
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
          <ThemeToggle />
          <CiSearch className="text-3xl md:hidden" onClick={handleOpenSearch} />
          <CiLocationOn className="text-3xl" />
          <CiUser className="text-3xl hidden md:block" />
          <CiShoppingCart className="text-3xl" />
        </div>
      </div>
      {openSearch && (
        <div className="flex justify-start gap-2 px-5 items-center mt-2 border border-neutralGray rounded-full">
          <CiSearch className="text-3xl" />
          <input
            type="search"
            name="search"
            id="search"
            className="w-full border-none focus:ring-0 bg-transparent"
            placeholder="Search for products"
            autoFocus
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
