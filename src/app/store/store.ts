import { configureStore } from "@reduxjs/toolkit";

import documentReduser from "@/entities/document/model/slice/documentSlice";
import { docsApi } from "@/entities/document/model/api/api";

export const store = configureStore({
  reducer: {
    document: documentReduser,
    [docsApi.reducerPath]: docsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(docsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
