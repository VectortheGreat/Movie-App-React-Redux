import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import modalSlice from "./modalSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    modal: modalSlice,
    user: userSlice,
  },
});
