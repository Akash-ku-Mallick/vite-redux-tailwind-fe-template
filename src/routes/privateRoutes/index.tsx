import type { RouteObject } from "react-router-dom";


export const privateRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <>dashboard</>
  },
  {
    path: 'plans',
    element: <>plans</>
  },
  {
    path: 'leaderboard',
    element: <>leaderboard</>
  }
];
