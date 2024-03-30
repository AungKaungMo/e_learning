import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const url = import.meta.env.VITE_APP_BASE_URL;
const baseQuery = fetchBaseQuery({ baseUrl: url });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),
});
