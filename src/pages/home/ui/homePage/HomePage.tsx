import { Editor } from "@/features/markup";

import { useHomePage } from "../../model/useHomePage";
import { EmptyHomePage } from "../emptyHomePage/EmptyHomePage";

export const HomePage = () => {
  const { introDocMarkup, editIntroDoc } = useHomePage();

  if (!introDocMarkup) {
    return <EmptyHomePage />;
  }

  return <Editor markup={introDocMarkup} setMarkup={editIntroDoc} />;
};
