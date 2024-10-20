import classNames from "classnames";

import { useTheme } from "@/shared/hooks/useTheme";
import { Moon } from "@/shared/icons/Moon";
import { Sun } from "@/shared/icons/Sun";
import { Switch } from "@/shared/ui/switch";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

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
