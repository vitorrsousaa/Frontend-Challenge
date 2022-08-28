// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer
  }
});

export default store
