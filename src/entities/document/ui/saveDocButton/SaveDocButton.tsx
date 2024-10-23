

import classNames from "classnames";

import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { updateDocument } from "../../model/api/api";
import styles from "./SaveDocButton.module.scss";
import { Button } from "@/shared/ui/button";

export const SaveDocButton = () => {
  const document = useAppSelector((state) => state.document.document);
  const mode = useAppSelector((state) => state.document.mode);
  const [updateDoc, { isLoading }] = updateDocument();

  const onClick = async () => {
    if (!document) return;
    if (mode === "intro") {
      localStorage.setItem("introductionDoc", JSON.stringify(document));
    }
    if (mode === "main") {
      await updateDoc(document).unwrap();
    }
  };

  return (
    <Button
      className={classNames({ [styles.disabled]: !document })}
      onClick={onClick}
    >
      <img src="/file.svg" alt="File icon" />
      {isLoading ? "Saving..." : "Save Changes"}
    </Button>
  );
};
