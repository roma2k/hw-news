import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface InterFaceNewsUnit {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text?: string;
  parent?: number;
}
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
    getItem: builder.query<InterFaceNewsUnit, number>({
      query: (id) => ({
        url: `/item/${id}.json?print=pretty`,
        method: "GET",
        params: {
          print,
        },
      }),
    }),
  }),
});
