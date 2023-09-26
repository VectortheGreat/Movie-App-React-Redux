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
      console.log(state.product);
    },
    integrateProductsFromServer: (state, action) => {
      const newData = action.payload;
      newData.forEach((item) => {
        const exists = state.product.some(
          (existingItem) => existingItem.id === item.id
        );
        if (!exists) {
          state.product.push(item);
        }
      });
    },
  },
});

export const { createProductFunc, integrateProductsFromServer } =
  productSlice.actions;

export default productSlice.reducer;
