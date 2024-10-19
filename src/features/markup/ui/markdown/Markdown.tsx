import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { BlockTitle } from "@/shared/ui/blockTitle";

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
