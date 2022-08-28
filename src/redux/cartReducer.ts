import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  quantity: number;
  name: string;
  photo: string;
  price: number;
  includedInSum: boolean;
}

const initialState: CartItem[] = [];

const getItemIndex = (state: CartItem[], idToFind: string): number => {
  const ids = state.map((item) => item.id);
  return ids.indexOf(idToFind);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = getItemIndex(state, action.payload.id);
      if (itemIndex && itemIndex < 0) state.push(action.payload);
      else state[itemIndex].quantity += action.payload.quantity;
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity(state, action: PayloadAction<{ id: string }>) {
      const itemIndex = getItemIndex(state, action.payload.id);
      state[itemIndex].quantity += 1;
    },
    decrementQuantity(state, action: PayloadAction<{ id: string }>) {
      const itemIndex = getItemIndex(state, action.payload.id);

      if (state[itemIndex].quantity > 1) state[itemIndex].quantity -= 1;
      else return state.filter((item) => item.id !== action.payload.id);
    },
    batchRemove(state, action: PayloadAction<{ ids: string[] }>) {
      return state.filter((item) => !action.payload.ids.includes(item.id));
    },
    toggleInclude(state, action: PayloadAction<{ id: string }>) {
      const itemIndex = getItemIndex(state, action.payload.id);
      state[itemIndex].includedInSum = !state[itemIndex].includedInSum;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  batchRemove,
  toggleInclude,
} = cartSlice.actions;
export default cartSlice.reducer;
