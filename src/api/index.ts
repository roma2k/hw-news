import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const print = "pretty";
export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getNewsList: builder.query<number[], number>({
      query: (limitToFirst) => ({
        url: `/newstories.json`,
        method: "GET",
        params: {
          limitToFirst,
          orderBy: '"$key"',
          print,
        },
      }),
    }),
    getItem: builder.query({
      query: (id) => ({
        url: `/${id}.json?print=pretty`,
        method: "GET",
        params: {
          print,
        },
      }),
    }),
  }),
});
