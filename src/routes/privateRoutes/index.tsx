import type { RouteObject } from "react-router-dom";
import PrivateRouterLayout from "../../layouts/privateRouterLayout";
import SettingsPage from "../../pages/dashboard/settingsPage";
import PlansPage from "../../pages/dashboard/plansPgae";
import plansRoute from "./plansRoute";
import DashboardOverviewPage from "../../pages/dashboard/dashboardOverview";


export const privateRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <PrivateRouterLayout />,
    children: [
      {
        path: '',
        element: <DashboardOverviewPage/>
      },
      {
        path: 'our-plans',
        element: <PlansPage/>,
        children: plansRoute
      },
      {
        path: 'settings',
        element: <SettingsPage />
      }
    ]
  },
];
