"use client";

import { toggleTheme } from "@/store/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleToggle}>
      {theme === "light" ? (
        <CiLight className="text-3xl" />
      ) : (
        <CiDark className="text-3xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
