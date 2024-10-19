import { useEffect } from "react";

import {
  changeMarkup,
  changeMode,
  resetDocument,
  setDocument,
} from "@/entities/document/model/slice/documentSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { getIntroDocumentFromLS } from "@/shared/utils/getIntroDocument";

const isIntroDeleted = localStorage.getItem("isIntroDeleted") === "true";

export const useHomePage = () => {
  const dispatch = useAppDispatch();
  const introDocMarkup = useAppSelector((state) => state.document.document?.markup,);

  useEffect(() => {
    if (!isIntroDeleted) {
      const document = getIntroDocumentFromLS();
      dispatch(setDocument(document));
    }
    dispatch(resetDocument());
    dispatch(changeMode("intro"));
  }, []);

  const editIntroDoc = (markup: string) => {
    dispatch(changeMarkup(markup));
  };

  return {
    introDocMarkup,
    editIntroDoc,
  };
};
