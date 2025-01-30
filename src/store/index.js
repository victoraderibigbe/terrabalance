import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import { saveCartToLocalStorage } from "./cartMiddleware";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveCartToLocalStorage),
});

export default store;
