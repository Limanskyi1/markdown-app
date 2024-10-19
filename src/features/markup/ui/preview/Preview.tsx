import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import { BlockTitle } from "@/shared/ui/blockTitle";

import styles from "./Preview.module.scss";

interface PreviewProps {
  markup: string;
}

export const Preview = (props: PreviewProps) => {
  const { markup } = props;
  return (
    <div className={styles.preview}>
      <BlockTitle title="Preview" />
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
