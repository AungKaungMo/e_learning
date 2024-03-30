import { apiSlice } from "./apiSlice";

const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    course: builder.query<any, void>({
      query: () => ({
        url: "user/v1/courses",
        method: "GET",
      }),
    }),
    getCourse: builder.query<any, string>({
      query: (courseSlug: string) => `user/v1/courses/${courseSlug}`,
    }),
  }),
});

export const { useCourseQuery, useGetCourseQuery } = courseApi;
