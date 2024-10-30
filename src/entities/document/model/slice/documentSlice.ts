import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { unescapeStringFromJson } from "@/shared/utils/unescapeStringFromJson";

import { IDocument } from "../types/document";

export interface documentState {
  document: IDocument | null;
}

const initialDocument = null;

const initialState: documentState = {
  document: initialDocument || null,
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setDocument: (state, action: PayloadAction<IDocument>) => {
      const { id, title, markup } = action.payload;
      state.document = {
        id,
        title,
        markup: unescapeStringFromJson(markup),
      };
    },
    changeMarkup: (state, action: PayloadAction<string>) => {
      if (!state.document) return;
      state.document = {
        ...state.document,
        markup: action.payload,
      };
    },
    changeName: (state, action: PayloadAction<string>) => {
      if (!state.document) return;
      state.document = {
        ...state.document,
        title: action.payload,
      };
    },
    resetDocument: (state) => {
      state.document = null;
    },
  },
});

export const {
  setDocument,
  changeMarkup,
  changeName,
  resetDocument,
} = documentSlice.actions;

export default documentSlice.reducer;
