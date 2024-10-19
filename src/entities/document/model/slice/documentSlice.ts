import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IDocument } from "../types/types";

type TypeMode = "intro" | "main";

export interface documentState {
  mode: TypeMode;
  document: IDocument | null;
}

const initialDocument = {
  id: 0,
  title: "",
  markup: "",
};

const initialState: documentState = {
  mode: "intro",
  document: initialDocument || null,
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setDocument: (state, action: PayloadAction<IDocument>) => {
      state.document = {
        ...action.payload,
      };
    },
    changeMarkup: (state, action: PayloadAction<string>) => {
      if(!state.document) return;
      state.document = {
        ...state.document,
        markup: action.payload,
      };
    },
    changeName: (state, action: PayloadAction<string>) => {
      if(!state.document) return;
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