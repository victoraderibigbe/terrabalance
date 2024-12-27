import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    theme: themeReducer,
  },
});

export default store;
