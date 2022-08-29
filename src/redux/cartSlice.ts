// src/redux/cartSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from './store';

interface CartItem {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      return (state = [...state, action.payload]);
    },
    removeItem(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      state.filter((item) => item.id === action.payload)[0].quantity += 1;
    },

    decrementQuantity(state, action: PayloadAction<number>) {
      const quantityCurrent = state.filter(
        (item) => item.id === action.payload
      )[0].quantity;

      quantityCurrent > 1 &&
        (state.filter((item) => item.id === action.payload)[0].quantity -= 1);
    },
  },
});

export default cartSlice;
