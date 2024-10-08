import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://campers-haven-server.vercel.app/api/v1",
    // baseUrl: "http://localhost:5173/api/v1",
  }),
  endpoints: () => ({}),
});
