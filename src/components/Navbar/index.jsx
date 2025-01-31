"use client";

import Image from "next/image";
import { MdExpandMore } from "react-icons/md";
import ThemeToggle from "../ThemeToggle";
import MenuToggle from "../MenuToggle";
import { useEffect, useRef, useState } from "react";
import CategoriesDropdown from "../CategoriesDropdown";
import Link from "next/link";
import { categories } from "@/data/dataStore";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AccountDropdown } from "../AccountDropdown";
import { MdShoppingCart, MdSearch } from "react-icons/md";

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

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce(
    (count, item) => count + (item.quantity || 0),
    0
  );

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const router = useRouter();

  return (
    <div className="p-3 border-b border-neutralGray md:p-5 z-50 sticky top-0 w-full bg-background">
      <div className="flex justify-between items-center gap-10">
        <div className="flex items-center gap-2 lg:gap-5">
          <MenuToggle />
          <Link href={"/"} className="flex items-center gap-1 !no-underline">
            <Image
              src={"/terra-logo.png"}
              alt="Terra Balance logo"
              width={30}
              height={30}
            />
            <p className="font-semibold text-base md:text-lg lg:text-xl">
              Terra Balance
            </p>
          </Link>
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
                        <Link href={`/${category.title.toLowerCase()}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </CategoriesDropdown>
        </div>
        <div className="md:flex justify-start gap-2 px-5 h-16 items-center border border-neutralGray rounded-full hidden flex-1">
          <MdSearch className="text-2xl" />
          <input
            type="search"
            name="search"
            id="search"
            className="w-full border-none focus:ring-0 bg-transparent"
            placeholder="Search for products"
            autoFocus
          />
        </div>
        <div className="hidden lg:block text-primary">
          <p className="my-0 font-[600]">Delivery</p>
          <p className="my-0 flex items-center">
            <span>Set your address</span>
            <MdExpandMore className="text-2xl" />
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
          <ThemeToggle />
          <MdSearch className="text-2xl md:hidden" onClick={handleOpenSearch} />
          <AccountDropdown isAuthenticated={isAuthenticated} user={user} />
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <MdShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <div className="p-2 size-4 rounded-full bg-red-500 absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm text-neutralLight font-bold">
                {cartCount}
              </div>
            )}
          </div>
        </div>
      </div>
      {openSearch && (
        <div className="flex justify-start gap-2 px-5 items-center mt-2 border border-neutralGray rounded-full">
          <MdSearch className="text-2xl" />
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
