import { baseApi } from "../../baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrders: builder.mutation({
      query: (orderInfo) => {
        return {
          url: "/orders/add-category",
          method: "POST",
          body: orderInfo,
        };
      },
    }),
    getOrders: builder.query({
      query: () => {
        return {
          url: "",
          method: "GET",
        };
      },
    }),
    getMyOredrs: builder.query({
      query: (id) => {
        return {
          url: `/orders/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useAddOrdersMutation } = orderApi;
