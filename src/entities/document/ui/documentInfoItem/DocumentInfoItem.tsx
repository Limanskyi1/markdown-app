import classNames from "classnames";

import styles from "./DocumentInfoItem.module.scss";

interface DocumentInfoItemProps {
  title: string;
  className?: string;
  disabled?: boolean;
  setTitle?: (value: string) => void;
}

export const DocumentInfoItem = (props: DocumentInfoItemProps) => {
  const { title, setTitle, className, disabled = true } = props;

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
