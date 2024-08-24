import { baseApi } from "../../baseApi";

const categorysApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (newCategory) => {
        return {
          url: "/category/add-category",
          method: "POST",
          body: newCategory,
        };
      },
    }),
    getCategorys: builder.query({
      query: () => {
        return {
          url: "/category/get-category",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useAddCategoryMutation, useGetCategorysQuery } = categorysApi;
