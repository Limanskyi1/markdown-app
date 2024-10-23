import { createContext, useEffect, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY } from "../model/consts";
import { ITheme } from "../model/types/theme";
import { getThemeFromLS } from "../model/utils/getThemeFromLS";

interface ThemeContextProps {
  theme: ITheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const fallbackTheme = getThemeFromLS();
  const [theme, setTheme] = useState<ITheme>(fallbackTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
