import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./ProductAPI";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;

