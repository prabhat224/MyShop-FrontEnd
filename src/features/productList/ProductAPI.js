import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {

  const resp = await fetch("http://localhost:8080/products");
  
  const productList = await resp.json();
  
  return productList;
});
