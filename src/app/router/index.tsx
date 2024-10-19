import { createBrowserRouter } from "react-router-dom";

import { DocumentPage } from "@/pages/document";
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
      {
        path: "/document/:id",
        element: <DocumentPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
