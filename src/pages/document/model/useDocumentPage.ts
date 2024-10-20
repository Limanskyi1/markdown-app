import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getDocument } from "@/entities/document/model/api/api";
import {
  changeMarkup,
  changeMode,
  setDocument,
} from "@/entities/document/model/slice/documentSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

export const useDocumentPage = () => {
  const dispatch = useAppDispatch(); //
  const params = useParams();
  const docMarkup = useAppSelector((state) => state.document.document?.markup); 
  const { data: document, isLoading, isError } = getDocument(Number(params.id));

  useEffect(() => {
    if (document) {
      dispatch(setDocument(document));
      dispatch(changeMode("main"));
    }
  }, [document]);

  const editDocument = (markup: string) => {
    dispatch(changeMarkup(markup));
  };

  return {
    isError,
    isLoading,
    docMarkup,
    editDocument,
  };
};
