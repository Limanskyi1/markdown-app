import styles from "./BlockTitle.module.scss";

interface BlockTitleProps {
  title: string;
}

export const BlockTitle = (props: BlockTitleProps) => {
  const { title } = props;
  return (
    <div className={styles.blockTitle}>
      <p>{title}</p>
    </div>
  );
};
