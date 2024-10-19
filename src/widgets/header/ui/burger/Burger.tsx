import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { toggleSidebar } from "@/widgets/sidebar/model/slice/sidebarSlice";

import styles from "./Burger.module.scss";

export const Burger = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.sidebar.isOpen);
  return (
    <div onClick={() => dispatch(toggleSidebar())} className={styles.burger}>
      <img src={active ? "/close.svg" : "/burger.svg"} alt="toogle" />
    </div>
  );
};
