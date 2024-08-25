import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    auth: (state, actions) => {
      state = actions.payload;
    },
  },
});

export const { auth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
