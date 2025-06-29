import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from '../../utills/serviceUtility/baseQueryWithToast';

const BASE_URL = import.meta.env.VITE_APP_URL as string

export const userServices = createApi({
  reducerPath: 'userServices',
  baseQuery: customBaseQuery(`${BASE_URL}/api/user/`),
  endpoints: (builder) => ({

  })
})

export const {
    
} = userServices