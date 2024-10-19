import { docsApi } from "@/shared/api/docsApi";

import { IDocument } from "../types/types";

const api = docsApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDocuments: build.query<IDocument[], void>({
      query: () => "/documents",
    }),
    getDocument: build.query<IDocument, number>({
      query: (id) => `/documents/${id}`,
    }),
    createDocument: build.mutation<IDocument, Partial<IDocument>>({
      query: (newDocument) => ({
        url: "/documents",
        method: "POST",
        body: newDocument,
      }),
    }),
  }),
});

export const { useGetAllDocumentsQuery,useGetDocumentQuery , useCreateDocumentMutation } = api;
