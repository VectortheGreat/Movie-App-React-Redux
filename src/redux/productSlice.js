import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductFunc: (state, action) => {
      state.product = [...state.product, action.payload]; //tüm state data'yı döner sonra hepsini üstüne ekler
      // console.log(state.product);
    },
  },
});

export const { createProductFunc } = productSlice.actions;

export default productSlice.reducer;
