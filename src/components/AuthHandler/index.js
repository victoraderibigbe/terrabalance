"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/authSlice";
import { jwtDecode } from "jwt-decode";

const AuthHandler = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        dispatch(setUser(JSON.parse(user)));
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthHandler;
