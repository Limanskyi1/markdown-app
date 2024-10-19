import { useNavigate } from "react-router-dom";

import { useCreateDocumentMutation } from "@/entities/document/model/api/api";
import { newDocument } from "@/shared/consts/consts";
import { Button } from "@/shared/ui/button";

import styles from "./EmptyHomePage.module.scss";

export const EmptyHomePage = () => {
  const navigate = useNavigate();
  const [createDocument, { isLoading }] = useCreateDocumentMutation();

  const onClick = async () => {
    const document = await createDocument(newDocument).unwrap();
    navigate(`/document/${document.id}`);
  };

  return (
    <Button onClick={onClick} className={styles.button}>
      {isLoading ? "Loading..." : "+ New Document"}
    </Button>
  );
};
