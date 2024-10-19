import { DocumentInfoItem } from "@/entities/document";
import { changeName } from "@/entities/document/model/slice/documentSlice";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Logo } from "@/shared/ui/logo";

import { Burger } from "../burger/Burger";
import { DeleteButton } from "../deleteButton/DeleteButton";
import { SaveButton } from "../saveButton/SaveButton";
import styles from "./Header.module.scss";

export const Header = () => {
  const dispatch = useAppDispatch();
  const documentName = useAppSelector((state) => state.document.document?.title);
  const setDocumentName = (value: string) => {
    dispatch(changeName(value));
  };

  return (
    <header className={styles.header}>
      <Burger />
      <Logo />
      <DocumentInfoItem
        className={styles.infoItem}
        title={documentName || ""}
        setTitle={setDocumentName}
        disabled={false}
      />
      <div className={styles.buttons}>
        <DeleteButton />
        <SaveButton />
      </div>
    </header>
  );
};
