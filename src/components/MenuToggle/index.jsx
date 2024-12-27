"use client";

import { toggleMenu } from "@/store/menuSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const MenuToggle = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <button onClick={handleToggle}>
      {isMenuOpen ? (
        <MdClose className="text-3xl text-red-500" />
      ) : (
        <MdMenu className="text-3xl" />
      )}
    </button>
  );
};

export default MenuToggle;
