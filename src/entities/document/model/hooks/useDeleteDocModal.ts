import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { deleteDocument } from "../api/api";
import { resetDocument } from "../slice/documentSlice";

export const useDeleteDocModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [deleteDoc] = deleteDocument();
  const { id } = useParams();
  const mode = useAppSelector((state) => state.document.mode);

  const handleDeleteDoc = async () => {
    if (mode === "main" && id) {
      await deleteDoc(Number(id)).unwrap();
      navigate("/");
    } else {
      dispatch(resetDocument());
      localStorage.setItem("isIntroDeleted", "true");
    }
  };
  return handleDeleteDoc;
};
