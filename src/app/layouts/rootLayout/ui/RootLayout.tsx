import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

import styles from "./RootLayout.module.scss";

export const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.right}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
