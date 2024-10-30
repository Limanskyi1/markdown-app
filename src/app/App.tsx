import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/features/theme-changer/ui/theme-provider";

import { router } from "./router";
import { store } from "./store/store";

export const App = () => {
  return (
    <ThemeProvider>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
