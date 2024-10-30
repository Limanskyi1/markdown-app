import classNames from "classnames";
import { useContext } from "react";

import { Moon } from "@/shared/icons/Moon";
import { Sun } from "@/shared/icons/Sun";
import { Switch } from "@/shared/ui/switch";

import { ThemeContext } from "../theme-provider/ui/ThemeProvider";
import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.switcher} onClick={toggleTheme}>
      <Moon
        width={17}
        height={17}
        className={classNames(styles.icon, {
          [styles.iconActive]: theme !== "dark",
        })}
      />
      <Switch enabled={theme === "dark"} />
      <Sun
        width={17}
        height={17}
        className={classNames(styles.icon, {
          [styles.iconActive]: theme === "dark",
        })}
      />
    </div>
  );
};
