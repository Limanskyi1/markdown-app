import { useParams } from "react-router-dom";

import { getDocument } from "@/entities/document/model/api/api";
import { changeMarkup } from "@/entities/document/model/slice/documentSlice";
import { Editor } from "@/features/editor";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Loader } from "@/shared/ui/loader";

export const DocumentPage = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const docMarkup = useAppSelector((state) => state.document.document?.markup);
  const { isLoading, isError } = getDocument(Number(params.id));

  const editDocument = (markup: string) => {
    dispatch(changeMarkup(markup));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error :(</h1>;
  }

  return <Editor markup={docMarkup || ""} setMarkup={editDocument} />;
};
