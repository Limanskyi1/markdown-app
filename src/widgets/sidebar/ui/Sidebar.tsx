import classNames from "classnames";
import { Link } from "react-router-dom";

import { DocumentInfoItem } from "@/entities/document";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import styles from "./Sidebar.module.scss";
import { getAllDocuments } from "@/entities/document/model/api/api";

export const Sidebar = () => {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  const { data: documents } = getAllDocuments();

  return (
    <aside className={classNames(styles.sidebar, { [styles.closed]: !isOpen })}>
      <h6 className={styles.title}>MY DOCUMENTS</h6>
      <div className={styles.list}>
        {documents?.map((document) => (
          <Link key={document.id} to={`/document/${document.id}`}>
            <DocumentInfoItem title={document.title} />
          </Link>
        ))}
      </div>
    </aside>
  );
};
