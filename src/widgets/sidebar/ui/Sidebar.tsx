import classNames from "classnames";

import { useAppSelector } from "@/shared/hooks/useAppSelector";

import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <aside className={classNames(styles.sidebar, { [styles.closed]: !isOpen })}>
      <h6 className={styles.title}>MY DOCUMENTS</h6>
    </aside>
  );
};
