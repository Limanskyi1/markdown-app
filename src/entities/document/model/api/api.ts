import { docsApi } from "@/shared/api/docsApi";

import { IDocument } from "../types/document";

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
    deleteDocument: build.mutation<void, number>({
      query: (id) => ({
        url: `/documents/${id}`,
        method: "DELETE",
      }),
    }),
    updateDocument: build.mutation<IDocument, Partial<IDocument>>({
      query: (updatedDocument) => ({
        url: `/documents/${updatedDocument.id}`,
        method: "PATCH",
        body: updatedDocument,
      }),
    })
  }),
});

export const getAllDocuments = api.useGetAllDocumentsQuery;
export const getDocument = api.useGetDocumentQuery;
export const createDocument = api.useCreateDocumentMutation;
export const deleteDocument = api.useDeleteDocumentMutation;
export const updateDocument = api.useUpdateDocumentMutation;