import { LOCAL_STORAGE_THEME_KEY } from "../consts";
import { ITheme } from "../types/theme";

export const getThemeFromLS = () => {
  return (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ITheme) || "light";
};
