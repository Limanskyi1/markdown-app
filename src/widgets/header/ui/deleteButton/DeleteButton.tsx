import classNames from "classnames";

import { resetDocument } from "@/entities/document/model/slice/documentSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import styles from "./DeleteButton.module.scss";

export const DeleteButton = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.document.mode);
  const document = useAppSelector((state) => state.document.document);

  const onClick = () => {
    if (mode === "intro" && document) {
      dispatch(resetDocument());
      localStorage.removeItem("introductionDoc");
      localStorage.setItem("isIntroDeleted", "true");
    }
  };

  return (
    <img
      className={classNames({
        [styles.disabled]: !document,
      })}
      onClick={onClick}
      src="/trash.svg"
      alt="Trash icon"
    />
  );
};
