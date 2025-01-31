"use client";

import { Provider } from "react-redux";
import store from "../store";
import ThemeWrapper from "@/components/ThemeWrapper";
import { Toaster } from "react-hot-toast";
import AuthHandler from "@/components/AuthHandler";

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <Toaster position="top-center" />
        <AuthHandler>{children}</AuthHandler>
      </ThemeWrapper>
    </Provider>
  );
};

export default ClientProvider;
