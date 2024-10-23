import classNames from "classnames";
import { useState } from "react";

import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { DeleteDocModal } from "../deleteDocModal/DeleteDocModal";
import styles from "./deleteDocButton.module.scss";

export const DeleteDocButton = () => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const document = useAppSelector((state) => state.document.document);

  const closeModal = () => {
    setDeleteModalIsOpen(false);
  };
  const openModal = () => {
    setDeleteModalIsOpen(true);
  };

  return (
    <>
      <img
        className={classNames({
          [styles.disabled]: !document,
        })}
        onClick={document ? openModal : () => null}
        src="/trash.svg"
        alt="Trash icon"
      />
      {deleteModalIsOpen && (
        <DeleteDocModal isOpen={deleteModalIsOpen} closeModal={closeModal} />
      )}
    </>
  );
};
