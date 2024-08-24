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
  }),
});

export const { useAddOrdersMutation } = orderApi;
