import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

import { CreateDocButton, DocumentInfoItem } from "@/entities/document";
import { getAllDocuments } from "@/entities/document/model/api/api";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const { id } = useParams();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  const { data: documents } = getAllDocuments();

  return (
    <aside className={classNames(styles.sidebar, { [styles.closed]: !isOpen })}>
      <h6 className={styles.title}>MY DOCUMENTS</h6>
      <CreateDocButton className={styles.button} />
      <div className={styles.list}>
        {documents?.map((document) => (
          <Link
            className={classNames(styles.link, {
              [styles.activeLink]: Number(id) === document.id,
            })}
            key={document.id}
            to={`/document/${document.id}`}
          >
            <DocumentInfoItem title={document.title} />
          </Link>
        ))}
      </div>
      <ThemeSwitcher />
    </aside>
  );
};
