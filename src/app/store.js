import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/productList/ProductSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
