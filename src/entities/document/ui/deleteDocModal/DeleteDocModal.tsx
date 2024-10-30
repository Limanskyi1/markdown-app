import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";

import { deleteDocument } from "../../model/api/api";
import { resetDocument } from "../../model/slice/documentSlice";
import styles from "./DeleteDocModal.module.scss";

interface DeleteDocModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const DeleteDocModal = (props: DeleteDocModalProps) => {
  const { isOpen, closeModal } = props;
  // 
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //
  const document = useAppSelector((state) => state.document.document);
  const [deleteDoc] = deleteDocument();

  const handleDeleteDoc = async () => {
    if (pathname !== "/" && id) {
      await deleteDoc(Number(id)).unwrap();
      navigate("/");
    } else {
      dispatch(resetDocument());
      localStorage.setItem("isIntroDeleted", "true");
    }
  };

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
