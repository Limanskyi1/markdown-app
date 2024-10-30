import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

import styles from "./RootLayout.module.scss";

export const RootLayout = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  return (
    <div className={styles.layout}>
      <Sidebar isOpen={sidebarIsOpen} />
      <div className={styles.right}>
        <Header sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
