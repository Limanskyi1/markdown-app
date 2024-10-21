import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { deleteDocument, getAllDocuments } from "../api/api";
import { resetDocument } from "../slice/documentSlice";

export const useDeleteDocButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //
  const mode = useAppSelector((state) => state.document.mode);
  const document = useAppSelector((state) => state.document.document);
  //
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  //
  const { refetch } = getAllDocuments();
  const [deleteDoc, { isLoading }] = deleteDocument();

  const closeModal = () => {
    setDeleteModalIsOpen(false);
  };
  const openModal = () => {
    setDeleteModalIsOpen(true);
  };

  const onClickDelete = async () => {
    if (mode === "intro" && document) {
      dispatch(resetDocument());
      localStorage.removeItem("introductionDoc");
      localStorage.setItem("isIntroDeleted", "true");
    }
    if (mode === "main" && document) {
      await deleteDoc(document.id).unwrap();
      refetch();
      navigate("/");
    }
  };
  return {
    document,
    openModal,
    closeModal,
    deleteModalIsOpen,
    onClickDelete,
  };
};
