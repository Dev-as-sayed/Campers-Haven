import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const categorySlice = createSlice({
  name: "categorys",
  initialState: {
    _id: Number,
    name: String,
    description: String,
    image: String,
  },
  reducers: {
    categorys: (state, actions) => {
      state = actions.payload;
    },
  },
});

export const { categorys } = categorySlice.actions;

export const selectCategorys = (state: RootState) => state.categorys;

export default categorySlice.reducer;
