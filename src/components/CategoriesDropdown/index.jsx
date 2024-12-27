"use client";

import { BiCategory } from "react-icons/bi";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const CategoriesDropdown = ({ children, openDropdown, onToggle }) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="h-16 px-5 flex items-center gap-2 border-2 text-primaryGreen dark:text-secondaryGreen border-primaryGreen dark:border-secondaryGreen hover:border-secondaryGreen dark:hover:border-primaryGreen hover:text-secondaryGreen dark:hover:text-primaryGreen rounded-full text-xl transition"
      >
        <BiCategory className="text-2xl" /> Categories{" "}
        {openDropdown ? (
          <MdExpandLess className="text-2xl" />
        ) : (
          <MdExpandMore className="text-2xl" />
        )}
      </button>
      {openDropdown && (
        <div className="mt-2 absolute w-full min-w-[60vw] bg-background border border-neutralGray rounded-lg p-5 z-50 h-[500px] overflow-auto">
          {children}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
