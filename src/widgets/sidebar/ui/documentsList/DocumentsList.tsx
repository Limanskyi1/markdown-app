import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

import { DocumentInfoItem } from "@/entities/document";
import { IDocument } from "@/entities/document/model/types/document";

import styles from "./DocumentsList.module.scss";

interface DocumentsListProps {
  documents: IDocument[];
}

export const DocumentsList = ({ documents }: DocumentsListProps) => {
  const { id } = useParams();

  return (
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
  );
};
