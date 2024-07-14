import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {};

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
