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
        <CiDark className="text-3xl" />
      ) : (
        <CiLight className="text-3xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
