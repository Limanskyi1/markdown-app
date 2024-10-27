import styles from "./Burger.module.scss";

interface BurgerProps {
  toggleSidebar: () => void;
  sidebarIsOpen: boolean;
}

export const Burger = ({ toggleSidebar ,sidebarIsOpen}: BurgerProps) => {
  return (
    <div onClick={toggleSidebar} className={styles.burger}>
      <img src={sidebarIsOpen ? "/close.svg" : "/burger.svg"} alt="toogle" />
    </div>
  );
};
