import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    modal: modalSlice,
  },
});
