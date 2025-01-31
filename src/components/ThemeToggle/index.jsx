"use client";

import { toggleTheme } from "@/store/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleToggle}>
      {theme === "light" ? (
        <MdLightMode className="text-2xl" />
      ) : (
        <MdDarkMode className="text-2xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
