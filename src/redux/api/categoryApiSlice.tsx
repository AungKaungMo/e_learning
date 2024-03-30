import { apiSlice } from "./apiSlice";

const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    categories: builder.query<any, void>({
      query: () => "user/v1/categories",
    }),
  }),
});

export const { useCategoriesQuery } = categorySlice;
