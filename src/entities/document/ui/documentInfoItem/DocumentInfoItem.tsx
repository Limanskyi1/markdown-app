import classNames from "classnames";

import styles from "./DocumentInfoItem.module.scss";

interface DocumentInfoItemProps {
  title: string;
  setTitle?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

export const DocumentInfoItem = (props: DocumentInfoItemProps) => {
  const { title, setTitle, className, disabled = true } = props;

  if (!title) {
    return null;
  }

  return (
    <div className={classNames(styles.item, className)}>
      <img src="/doc-icon.svg" alt="Document icon" />
      <div className={styles.info}>
        <span>Document Name</span>
        <input
          disabled={disabled}
          value={title}
          onChange={setTitle ? (e) => setTitle(e.target.value): undefined}
        />
      </div>
    </div>
  );
};
