"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/authSlice";
import { jwtDecode } from "jwt-decode";

const AuthHandler = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        dispatch(setUser(decoded));
      } else {
        localStorage.removeItem("token");
      }
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthHandler;
