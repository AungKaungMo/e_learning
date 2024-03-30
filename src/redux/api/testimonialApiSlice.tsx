import { apiSlice } from "./apiSlice";

const testimonialApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    testimonial: builder.query<any, void>({
      query: () => "user/v1/student-reviews",
    }),
  }),
});

export const { useTestimonialQuery } = testimonialApiSlice;
