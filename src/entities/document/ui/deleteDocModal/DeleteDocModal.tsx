import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";

import { useDeleteDocModal } from "../../model/hooks/useDeleteDocModal";
import styles from "./DeleteDocModal.module.scss";

interface DeleteDocModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const DeleteDocModal = (props: DeleteDocModalProps) => {
  const { isOpen, closeModal } = props;
  const document = useAppSelector((state) => state.document.document);
  const handleDeleteDoc = useDeleteDocModal();

  const onClickDelete = async () => {
    await handleDeleteDoc();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} close={closeModal}>
      <h3 className={styles.title}>
        Are you sure you want to delete this document?
      </h3>
      <p className={styles.text}>
        Are you sure you want to delete the ‘{document?.title}’ document and its
        contents? This action cannot be reversed.
      </p>
      <Button className={styles.button} onClick={onClickDelete}>
        Confirm & Delete
      </Button>
    </Modal>
  );
};
