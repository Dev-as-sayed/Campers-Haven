import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query({
      query: () => {
        return {
          url: "/product/get-products",
          method: "GET",
        };
      },
      transformResponse: (response: { data: any }) => response.data,
    }),
  }),
});

export const { useProductsQuery } = productApi;

console.log(useProductsQuery);
