import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import drawerReducer from "./drawerSlice";
import { saveCartToLocalStorage } from "./cartMiddleware";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    drawer: drawerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveCartToLocalStorage),
});

export default store;
