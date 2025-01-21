"use client";

import { toggleMenu } from "@/store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import MenuToggle from "../MenuToggle";
import DropdownItem from "../DropdownItem";
import Link from "next/link";
import { sidebarData } from "@/data/dataStore";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();
  const sidebarRef = useRef(null);

  const [openMainDropdown, setOpenMainDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggleMenu());
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMainToggle = (index) => {
    setOpenMainDropdown((prev) => (prev === index ? null : index));
    setOpenSubDropdown(null);
  };

  const handleSubToggle = (index) => {
    setOpenSubDropdown((prev) => (prev === index ? null : index));
  };

  const filteredSidebarData = sidebarData.filter(
    (data) => data.title !== "Categories"
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}
      ></div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-4/5 md:w-full max-w-xs md:max-w-md lg:max-w-lg bg-background shadow-lg transform transition-transform z-[99] overflow-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-primaryGreen dark:text-secondaryGreen">
              Browse Terra Balance
            </h4>
            <MenuToggle />
          </div>
          <div className="text-base md:text-lg lg:text-xl block lg:hidden">
            {sidebarData.map((mainItem, index) => (
              <DropdownItem
                key={index}
                title={mainItem.title}
                isOpen={openMainDropdown === index}
                onToggle={() => handleMainToggle(index)}
              >
                <div className="border p-2 rounded-md">
                  {mainItem.content.map((subItem, subIndex) => (
                    <DropdownItem
                      key={subIndex}
                      title={subItem.title}
                      isOpen={openSubDropdown === subIndex}
                      onToggle={() => handleSubToggle(subIndex)}
                    >
                      <ul className="border p-2 rounded-md">
                        {subItem.items.map((item, idx) => (
                          <li key={idx} className="mb-2">
                            <Link href={"#"}>{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </DropdownItem>
                  ))}
                </div>
              </DropdownItem>
            ))}
          </div>
          <div className="text-base md:text-lg lg:text-xl hidden lg:block">
            {filteredSidebarData.map((mainItem, index) => (
              <DropdownItem
                key={index}
                title={mainItem.title}
                isOpen={openMainDropdown === index}
                onToggle={() => handleMainToggle(index)}
              >
                <div className="border p-2 rounded-md">
                  {mainItem.content.map((subItem, subIndex) => (
                    <DropdownItem
                      key={subIndex}
                      title={subItem.title}
                      isOpen={openSubDropdown === subIndex}
                      onToggle={() => handleSubToggle(subIndex)}
                    >
                      <ul className="border p-2 rounded-md">
                        {subItem.items.map((item, idx) => (
                          <li key={idx} className="mb-2">
                            <Link href={"#"}>{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </DropdownItem>
                  ))}
                </div>
              </DropdownItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
