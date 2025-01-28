import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";
import { saveCartToLocalStorage } from "./cartMiddleware";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveCartToLocalStorage),
});

export default store;
