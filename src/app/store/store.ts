import { configureStore } from "@reduxjs/toolkit";

import documentReduser from "@/entities/document/model/slice/documentSlice";
import { docsApi } from "@/shared/api/docsApi";
import sidebarReducer from "@/widgets/sidebar/model/slice/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    document: documentReduser,
    [docsApi.reducerPath]: docsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(docsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
