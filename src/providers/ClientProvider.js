"use client";

import { Provider } from "react-redux";
import store from "../store";
import ThemeWrapper from "@/components/ThemeWrapper";
import { Toaster } from "react-hot-toast";

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <Toaster position="top-center" />
        {children}
      </ThemeWrapper>
    </Provider>
  );
};

export default ClientProvider;
