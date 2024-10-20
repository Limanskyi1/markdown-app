import { ChangeEvent } from "react";

import { BlockTitle } from "../blockTitle/ui/BlockTitle";
import styles from "./Markdown.module.scss";

interface MarkdownProps {
  value: string;
  setValue: (value: string) => void;
}

export const Markdown = (props: MarkdownProps) => {
  const { value, setValue } = props;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.markdown}>
      <BlockTitle title="Markdown" />
      <textarea
        value={value}
        onChange={onChange}
        className={styles.textarea}
      ></textarea>
    </div>
  );
};