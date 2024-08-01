import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    products: (state, actions) => {
      state = actions.payload;
      console.log(state);
    },
  },
});

export const { products } = productsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const selectProducts = (state: RootState) => state.products;

console.log(selectProducts);

export default productsSlice.reducer;
