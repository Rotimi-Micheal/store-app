import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { cartIsShown: false },
  reducers: {
    showModal(state) {
      state.cartIsShown = true;
    },
    hideModal(state) {
      state.cartIsShown = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
