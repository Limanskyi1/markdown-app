import { CreateDocButton } from "@/entities/document";
import { setDocument } from "@/entities/document/model/slice/documentSlice";
import { introductionDoc } from "@/shared/consts/consts";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { Button } from "@/shared/ui/button";
import { getIntroDocumentFromLS } from "@/shared/utils/getIntroDocument";

import { useHomePage } from "../../model/useHomePage";
import styles from "./EmptyHomePage.module.scss";

export const EmptyHomePage = () => {
  const { setIntroDocument } = useHomePage();

  const handleClickRecover = () => {
    localStorage.setItem("isIntroDeleted", "false");
    setIntroDocument();
  };

  return (
    <div className={styles.block}>
      <h2 className={styles.title}>You deleted introduced document</h2>
      <h3 className={styles.subtitle}>
        Create a new document or recover introduced document
      </h3>
      <div className={styles.buttons}>
        <CreateDocButton />
        <Button onClick={handleClickRecover}>Recover</Button>
      </div>
    </div>
  );
};
