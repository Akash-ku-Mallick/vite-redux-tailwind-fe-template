import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '../../utills/serviceUtility/baseQueryWithToast';

const BASE_URL = import.meta.env.VITE_APP_URL as string

export const adminServices = createApi({
  reducerPath: 'adminServices',
  baseQuery: customBaseQuery(`${BASE_URL}/api/admin/`),
  endpoints: (builder) => ({
    

  }),
});

export const {

} = adminServices;
