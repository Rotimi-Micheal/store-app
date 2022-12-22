import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount =
        state.totalAmount + state.items.price * state.items.quantity;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
          name: newItem.name,
          totalAmount: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
        existingItem.totalAmount = existingItem.price * existingItem.quantity;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
