import { CreateDocButton } from "@/entities/document";
import styles from "./EmptyHomePage.module.scss";

export const EmptyHomePage = () => {
  return <CreateDocButton className={styles.button} />;
};
