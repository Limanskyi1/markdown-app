import classNames from "classnames";

import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/button";

import styles from "./SaveButton.module.scss";

export const SaveButton = () => {
  const document = useAppSelector((state) => state.document.document);
  const mode = useAppSelector((state) => state.document.mode);

  const onClick = () => {
    if (mode === "intro" && document) {
      localStorage.setItem("introductionDoc", JSON.stringify(document));
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
