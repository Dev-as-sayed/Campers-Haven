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

export const selectOrders = (state: RootState) => state.orders;

export default orderSlice.reducer;
