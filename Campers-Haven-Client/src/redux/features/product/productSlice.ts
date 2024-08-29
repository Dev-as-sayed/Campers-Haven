import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  name: String,
  category: String,
  description: String,
  images: [String],
  price: Number,
  offers_price: Number,
  stock_quantity: Number,
  status: ["on-sell", "off-sell", "disabled"],
  offered: ["offerd", "regular"],
  total_sell: Number,
  ratings: Number,
};

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
