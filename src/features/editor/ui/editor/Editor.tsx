import classNames from "classnames";
import { useState } from "react";

import { Markdown } from "../markdown/Markdown";
import { Preview } from "../preview/Preview";
import styles from "./Editor.module.scss";

interface EditorProps {
  markup: string;
  setMarkup: (value: string) => void;
}

export const Editor = (props: EditorProps) => {
  const { markup, setMarkup } = props;

  const [isMarkdownHide, setIsMarkdownHide] = useState(false);

  const toggleMarkdown = () => {
    setIsMarkdownHide(!isMarkdownHide);
  };

  return (
    <div
      className={classNames(styles.editor, {
        [styles.markdownHide]: isMarkdownHide,
      })}
    >
      {!isMarkdownHide && <Markdown value={markup} setValue={setMarkup} />}
      <Preview
        markup={markup}
        isMarkdownHide={isMarkdownHide}
        toggleMarkdown={toggleMarkdown}
      />
    </div>
  );
};
