"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  return <>{children}</>;
};

export default ThemeWrapper;
