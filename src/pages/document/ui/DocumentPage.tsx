import { Editor } from "@/features/markup";

import { useDocumentPage } from "../model/useDocumentPage";
import { Loader } from "@/shared/ui/loader";

export const DocumentPage = () => {
  const { isError, isLoading, docMarkup, editDocument } = useDocumentPage();

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <h1>Error :(</h1>;
  }

  return <Editor markup={docMarkup || ""} setMarkup={editDocument} />;
};
