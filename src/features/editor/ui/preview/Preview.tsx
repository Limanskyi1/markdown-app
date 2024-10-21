import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import { EyeClose } from "@/shared/icons/EyeClose";
import { EyeOpen } from "@/shared/icons/EyeOpen";

import styles from "./Preview.module.scss";

interface PreviewProps {
  markup: string;
  isMarkdownHide: boolean;
  toggleMarkdown: () => void;
}

export const Preview = (props: PreviewProps) => {
  const { markup, toggleMarkdown, isMarkdownHide } = props;
  return (
    <div className={styles.preview}>
      <div className={styles.blockTitle}>
        <p>Preview</p>
        <div onClick={toggleMarkdown}>
          {isMarkdownHide ? <EyeClose /> : <EyeOpen />}
        </div>
      </div>
      <div className={styles.previewContent}>
        <Markdown
          children={markup}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
      </div>
    </div>
  );
};
