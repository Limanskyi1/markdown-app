import { useEffect } from "react";

import {
  changeMarkup,
  resetDocument,
  setDocument,
} from "@/entities/document/model/slice/documentSlice";

import { introductionDoc } from "@/shared/consts/consts";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { getIntroDocumentFromLS } from "@/shared/utils/getIntroDocument";

export const useHomePage = () => {
  const dispatch = useAppDispatch();
  const introDocMarkup = useAppSelector(
    (state) => state.document.document?.markup,
  );

  const setIntroDocument = () => {
    const document = getIntroDocumentFromLS();
    dispatch(setDocument(document || introductionDoc));
  };

  useEffect(() => {
    const isIntroDeleted = localStorage.getItem("isIntroDeleted") === "true";
    if (!isIntroDeleted) {
      setIntroDocument();
      return;
    }
    dispatch(resetDocument());
  }, []);

  const editIntroDoc = (markup: string) => {
    dispatch(changeMarkup(markup));
  };

  return {
    introDocMarkup,
    editIntroDoc,
    setIntroDocument,
  };
};
