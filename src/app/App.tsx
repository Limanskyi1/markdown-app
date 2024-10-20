import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./providers/themeProvider";
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
