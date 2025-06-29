import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import toast from 'react-hot-toast';
import type { RootState } from '../../../store/type';

export const customBaseQuery = (baseUrl: string): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).authSlice.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  });

  return async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
if (
  result &&
  result.meta?.response?.status === 200 &&
  typeof (result as any).data?.message === 'string'
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toast.success((result as any).data.message);
} else if (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typeof (result as any).error?.data?.message === 'string'
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toast.error((result as any).error?.data?.message);
}


    return result;
  };
};
