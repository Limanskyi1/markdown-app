import classNames from "classnames";
import { useLocation } from "react-router-dom";

import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/button";

import { updateDocument } from "../../model/api/api";
import styles from "./SaveDocButton.module.scss";

export const SaveDocButton = () => {
  const { pathname } = useLocation();
  //
  const document = useAppSelector((state) => state.document.document);
  //
  const [updateDoc, { isLoading }] = updateDocument();

  const onClick = async () => {
    if (!document) return;
    if (pathname === "/") {
      localStorage.setItem("introductionDoc", JSON.stringify(document));
    } else {
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
