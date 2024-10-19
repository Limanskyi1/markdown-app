import { Markdown } from "../markdown/Markdown";
import { Preview } from "../preview/Preview";
import styles from "./Editor.module.scss";

interface EditorProps {
  markup: string;
  setMarkup: (value: string) => void;
}

export const Editor = (props: EditorProps) => {
  const { markup, setMarkup } = props;

  return (
    <div className={styles.editor}>
      <Markdown value={markup} setValue={setMarkup} />
      <Preview markup={markup} />
    </div>
  );
};
