import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    products: (state, actions) => {
      state = actions.payload;
    },
  },
});

export const { products } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
