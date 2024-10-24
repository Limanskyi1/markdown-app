import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { unescapeStringFromJson } from "@/shared/utils/unescapeStringFromJson";

import { IDocument } from "../types/document";

type TypeMode = "intro" | "main";

export interface documentState {
  mode: TypeMode;
  document: IDocument | null;
}

const initialDocument = null;

const initialState: documentState = {
  mode: "intro",
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
    changeMode: (state, action: PayloadAction<TypeMode>) => {
      state.mode = action.payload;
    },
    resetDocument: (state) => {
      state.document = null;
      localStorage.setItem("isIntroDeleted", "true");
    },
  },
});

export const {
  setDocument,
  changeMarkup,
  changeMode,
  changeName,
  resetDocument,
} = documentSlice.actions;

export default documentSlice.reducer;
