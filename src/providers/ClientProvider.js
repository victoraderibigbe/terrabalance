"use client";

import { Provider } from "react-redux";
import store from "../store";
import ThemeWrapper from "@/components/ThemeWrapper";

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
};

export default ClientProvider;
