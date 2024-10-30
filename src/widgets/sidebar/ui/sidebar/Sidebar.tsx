import classNames from "classnames";

import { CreateDocButton } from "@/entities/document";
import { getAllDocuments } from "@/entities/document/model/api/api";
import { ThemeSwitcher } from "@/features/theme-changer";

import styles from "./Sidebar.module.scss";
import { DocumentsList } from "../documentsList/DocumentsList";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  const { data: documents } = getAllDocuments();
  return (
    <aside className={classNames(styles.sidebar, { [styles.closed]: !isOpen })}>
      <h6 className={styles.title}>MY DOCUMENTS</h6>
      <CreateDocButton className={styles.button} />
      <DocumentsList documents={documents || []} />
      <ThemeSwitcher />
    </aside>
  );
};
