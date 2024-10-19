import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const docsApi = createApi({
  reducerPath: "docsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://af7ff572abe7661c.mokky.dev" }),
  endpoints: () => ({}),
});
