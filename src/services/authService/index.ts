import { createApi } from '@reduxjs/toolkit/query/react';
import type { loginReturnType } from './type';
import { customBaseQuery } from '../../utills/serviceUtility/baseQueryWithToast';

const BASE_URL = import.meta.env.VITE_APP_URL as string

export const authServices = createApi({
  reducerPath: 'authServices',
  baseQuery: customBaseQuery(`${BASE_URL}/api/auth/`),
  endpoints: (builder) => ({
    
    login: builder.mutation<loginReturnType, {email: string, password: string}>({
      query: (arg) => ({
        url: 'login',
        method: 'POST',
        body: arg,
      }),
    }),

    register: builder.mutation<loginReturnType, {email: string, password: string}>({
      query: (arg) => ({
        url: 'register',
        method: 'POST',
        body: arg,
      }),
    }),

  }),
});

export const {
  useLoginMutation,
} = authServices;
