import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/pages/home";

import { RootLayout } from "../layouts/rootLayout";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
