import { Editor } from "@/features/markup";
import { Button } from "@/shared/ui/button";

import { useHomePage } from "../model/useHomePage";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const { introDocMarkup, editIntroDoc } = useHomePage();

  if (!introDocMarkup) {
    return <Button className={styles.button}>+ New Document</Button>;
  }

  return <Editor markup={introDocMarkup} setMarkup={editIntroDoc} />;
};
