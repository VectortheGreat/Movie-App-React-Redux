import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProductFunc: (state, action) => {
      state.product = [...state.product, action.payload];
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
    updateProductFunc: (state, action) => {
      const updatedProductId = action.payload.id;
      state.product = state.product.map((product) => {
        if (product.id == updatedProductId) {
          console.log("Güncelleme işlemi başarılı!");
          console.log("Güncellenen Ürün:", action.payload);
          console.log("Güncellenmiş Durum:", state.product);
          return {
            ...product,
            name: action.payload.name,
            category: action.payload.category,
            date: action.payload.date,
            description: action.payload.description,
          };
        } else {
          console.log(false);
          return product;
        }
      });
    },
    deleteProductFunc: (state, action) => {
      console.log(true);
      state.data = state.data.filter((dt) => {
        return dt.id !== action.payload;
      });
    },
  },
});

export const {
  createProductFunc,
  integrateProductsFromServer,
  updateProductFunc,
  deleteProductFunc,
} = productSlice.actions;

export default productSlice.reducer;
