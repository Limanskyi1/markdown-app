import { useContext } from "react";

import { ThemeContext } from "@/app/providers/themeProvider/ui/ThemeProvider";

export const useTheme = () => {
  return useContext(ThemeContext);
};
