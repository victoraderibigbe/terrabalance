import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
});

export default store;
