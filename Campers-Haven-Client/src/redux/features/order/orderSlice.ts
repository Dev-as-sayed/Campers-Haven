import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {},
  reducers: {
    orders: (state, actions) => {
      state = actions.payload;
    },
  },
});

export const { orders } = orderSlice.actions;

export const selectOrders = (state: RootState) => state.categorys;

export default orderSlice.reducer;
