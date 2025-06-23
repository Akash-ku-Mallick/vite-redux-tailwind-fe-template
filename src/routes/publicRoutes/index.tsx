// src/routes/publicRoutes.ts
import React from "react";
import type { RouteObject } from "react-router-dom";


export const publicRoutes: RouteObject[] = [
  {
    path: '',
    element: <>Home</>
  },
  {
    path: 'login',
    element: <>Login</>
  }
];
