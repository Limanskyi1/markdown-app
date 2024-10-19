import { docsApi } from "@/shared/api/docsApi";

import { IDocument } from "../types/types";

const api = docsApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDocuments: build.query<IDocument[], void>({
      query: () => "/documents",
    }),
    getPreviewDocument: build.query<IDocument, void>({
      query: () => "/documents-preview/1",
    }),
  }),
});

export const { useGetAllDocumentsQuery, useGetPreviewDocumentQuery } = api;
