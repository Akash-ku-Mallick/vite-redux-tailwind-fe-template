import type { RouteObject } from "react-router-dom";
import LoginPage from "../../pages/authentication/login";
import RegistrationPage from "../../pages/authentication/register";
import PublicLayout from "../../layouts/publicLayout";


export const publicRoutes: RouteObject[] = [
  {
    path: '',
    element: <PublicLayout />,
    children: [
      {
        path: '',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegistrationPage />
      }
    ]
  }
];
