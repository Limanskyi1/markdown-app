import { useNavigate } from "react-router-dom";
import { createDocument, getAllDocuments } from "@/entities/document/model/api/api";

import { newDocument } from "@/shared/consts/consts";
import { Button } from "@/shared/ui/button";

import styles from "./EmptyHomePage.module.scss";

export const EmptyHomePage = () => {
  const navigate = useNavigate();
  const { refetch } = getAllDocuments();
  const [createDoc, { isLoading }] = createDocument();

  const onClick = async () => {
    const document = await createDoc(newDocument).unwrap();
    refetch();
    navigate(`/document/${document.id}`);
  };

  return (
    <Button onClick={onClick} className={styles.button}>
      {isLoading ? "Loading..." : "+ New Document"}
    </Button>
  );
};
