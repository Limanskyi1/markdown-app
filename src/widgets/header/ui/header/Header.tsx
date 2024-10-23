import { DocumentInfoItem, SaveDocButton } from "@/entities/document";
import { DeleteDocButton } from "@/entities/document";
import { changeName } from "@/entities/document/model/slice/documentSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Logo } from "@/shared/ui/logo";

import { Burger } from "../burger/Burger";
import styles from "./Header.module.scss";

export const Header = () => {
  const dispatch = useAppDispatch();
  const document = useAppSelector((state) => state.document.document);
  const setDocumentName = (value: string) => {
    dispatch(changeName(value));
  };

  return (
    <header className={styles.header}>
      <Burger />
      <Logo />
      {document && (
        <DocumentInfoItem
          className={styles.infoItem}
          title={document?.title || ""}
          setTitle={setDocumentName}
          disabled={false}
        />
      )}
      <div className={styles.buttons}>
        <DeleteDocButton />
        <SaveDocButton />
      </div>
    </header>
  );
};
