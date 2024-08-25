import { baseApi } from "../../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    singUp: builder.mutation({
      query: (userData) => {
        return {
          url: "/auth/register-user",
          method: "POST",
          body: userData,
        };
      },
    }),
    logIn: builder.mutation({
      query: (userData) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: userData,
        };
      },
    }),
  }),
});

export const { useSingUpMutation } = authApi;
