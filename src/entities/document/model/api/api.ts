import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { changeMode, setDocument } from "../slice/documentSlice";
import { IDocument } from "../types/document";

export const docsApi = createApi({
  reducerPath: "docsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://af7ff572abe7661c.mokky.dev" }),
  tagTypes: ["Documents"],
  endpoints: (build) => ({
    getAllDocuments: build.query<IDocument[], void>({
      query: () => "/documents",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Documents" as const, id })),
              { type: "Documents", id: "LIST" },
            ]
          : [{ type: "Documents", id: "LIST" }],
    }),
    getDocument: build.query<IDocument, number>({
      query: (id) => `/documents/${id}`,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: document } = await queryFulfilled;
          dispatch(setDocument(document));
          dispatch(changeMode("main"));
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      },
      keepUnusedDataFor: 0,
    }),
    createDocument: build.mutation<IDocument, Partial<IDocument>>({
      query: (newDocument) => ({
        url: "/documents",
        method: "POST",
        body: newDocument,
      }),
      invalidatesTags: ["Documents"],
    }),
    deleteDocument: build.mutation<void, number>({
      query: (id) => ({
        url: `/documents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Documents"],
    }),
    updateDocument: build.mutation<IDocument, Partial<IDocument>>({
      query: (updatedDocument) => ({
        url: `/documents/${updatedDocument.id}`,
        method: "PATCH",
        body: updatedDocument,
      }),
    }),
  }),
});

export const getAllDocuments = docsApi.useGetAllDocumentsQuery;
export const getDocument = docsApi.useGetDocumentQuery;
export const createDocument = docsApi.useCreateDocumentMutation;
export const deleteDocument = docsApi.useDeleteDocumentMutation;
export const updateDocument = docsApi.useUpdateDocumentMutation;
