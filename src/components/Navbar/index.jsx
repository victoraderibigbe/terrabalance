"use client";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";
import ThemeToggle from "../ThemeToggle";
import MenuToggle from "../MenuToggle";
import { useEffect, useRef, useState } from "react";
import CategoriesDropdown from "../CategoriesDropdown";
import { categories } from "@/data/categories";
import Link from "next/link";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <div className="p-3 border-b border-neutralGray md:p-5 z-50 sticky top-0 w-full max-w-[1500px] bg-background">
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
        <div className="hidden lg:flex" ref={dropdownRef}>
          <CategoriesDropdown
            openDropdown={openDropdown}
            onToggle={() => setOpenDropdown(!openDropdown)}
          >
            <ul className="grid grid-cols-3 gap-3 items-start text-xl text-foreground leading-loose">
              {categories.map((category, index) => (
                <li key={index}>
                  <span className="font-bold mb-2">{category.title}</span>
                  <ul>
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        <Link href={"#"}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CategoriesDropdown>
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
          <CiLocationOn className="text-3xl lg:hidden" />
          <CiUser className="text-3xl hidden md:block" />
          <div className="relative">
            <CiShoppingCart className="text-3xl" />
            <div className="p-2 size-5 rounded-full bg-red-500 absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm text-neutralWhite font-bold">
              2
            </div>
          </div>
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
