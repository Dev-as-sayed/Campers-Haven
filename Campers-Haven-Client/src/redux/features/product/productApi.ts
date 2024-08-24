import { baseApi } from "../../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProducts: builder.mutation({
      query: (newProduct) => {
        return {
          url: "/product/add-product",
          method: "POST",
          body: newProduct,
        };
      },
    }),
    products: builder.query({
      query: (query) => {
        return {
          url: "/product/get-products",
          method: "GET",
          params: query,
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useProductsQuery,
  useAddProductsMutation,
  useGetSingleProductQuery,
} = productApi;
