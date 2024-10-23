import { useParams } from "react-router-dom";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { deleteDocument, getAllDocuments } from "../api/api";
import { resetDocument } from "../slice/documentSlice";

export const useDeleteDocModal = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.document.mode);
  const { refetch } = getAllDocuments();
  const [deleteDoc] = deleteDocument();

  const handleDeleteDoc = async () => {
    if (mode === "intro") {
      dispatch(resetDocument());
    }
    if (mode === "main") {
      if (!id) return;
      await deleteDoc(Number(id)).unwrap();
      refetch();
    }
  };
  return handleDeleteDoc;
};
