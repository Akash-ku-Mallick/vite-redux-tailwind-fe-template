import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/not-found-page";
import BaseLayout from "../layouts/baseLayout";
import PublicLayout from "../layouts/publicLayout";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      ...publicRoutes,
      ...privateRoutes
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
