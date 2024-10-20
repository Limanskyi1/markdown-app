import classNames from "classnames";

import { updateDocument } from "@/entities/document/model/api/api";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/button";

import styles from "./SaveButton.module.scss";

export const SaveButton = () => {
  const document = useAppSelector((state) => state.document.document);
  const mode = useAppSelector((state) => state.document.mode);
  const [updateDoc, { isLoading }] = updateDocument();

  const onClick = async () => {
    if (mode === "intro" && document) {
      localStorage.setItem("introductionDoc", JSON.stringify(document));
    }
    if (mode === "main" && document) {
      await updateDoc(document).unwrap();
    }
  };

  return (
    <Button
      className={classNames({ [styles.disabled]: !document })}
      onClick={onClick}
    >
      <img src="/file.svg" alt="File icon" />
      Save Changes
    </Button>
  );
};
