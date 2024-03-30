import { apiSlice } from "./apiSlice";

const studentProjectSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    studentProject: builder.query<any, void>({
      query: () => "user/v1/student-projects",
    }),
  }),
});

export const { useStudentProjectQuery } = studentProjectSlice;
