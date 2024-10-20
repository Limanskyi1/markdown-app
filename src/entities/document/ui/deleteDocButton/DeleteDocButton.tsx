import classNames from "classnames";

import { Modal } from "@/shared/ui/modal";
import styles from "./deleteDocButton.module.scss";
import { useDeleteDocButton } from "../../model/hooks/useDeleteDocButton";

export const DeleteDocButton = () => {
  const { document, openModal, closeModal, deleteModalIsOpen, onClickDelete } =
    useDeleteDocButton();

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
        <Modal
          title="Delete this document?"
          isOpen={deleteModalIsOpen}
          close={closeModal}
          action={onClickDelete}
        >
          Are you sure you want to delete the ‘{document?.title}’ document and
          its contents? This action cannot be reversed.
        </Modal>
      )}
    </>
  );
};
