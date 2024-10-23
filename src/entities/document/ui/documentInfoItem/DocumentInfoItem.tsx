import classNames from "classnames";
import { useParams } from "react-router-dom";

import styles from "./DocumentInfoItem.module.scss";

interface DocumentInfoItemProps {
  title: string;
  className?: string;
  disabled?: boolean;
  setTitle?: (value: string) => void;
}

export const DocumentInfoItem = (props: DocumentInfoItemProps) => {
  const { id } = useParams();
  const { title, setTitle, className, disabled = true } = props;

  return (
    <div
      className={classNames(styles.item, className, { [styles.active]: id })}
    >
      <img src="/doc-icon.svg" alt="Document icon" />
      <div className={styles.info}>
        <span>Document Name</span>
        <input
          disabled={disabled}
          value={title}
          onChange={setTitle ? (e) => setTitle(e.target.value) : undefined}
        />
      </div>
    </div>
  );
};
