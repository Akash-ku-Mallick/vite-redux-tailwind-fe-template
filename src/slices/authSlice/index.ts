import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { loginReturnType } from '../../services/authService/type';
import { authServices } from '../../services/authService';

interface AuthState {
  token: string | null;
  isVerified: boolean;
  isCompleted: boolean;
  user: loginReturnType['data'] | null;
}

const initialState: AuthState = {
  token: null,
  isVerified: false,
  isCompleted: false,
  user: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isVerified = false;
      state.isCompleted = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authServices.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token || null;
        state.user = payload.data;
        state.isVerified = payload.isVerified;
        state.isCompleted = payload.isCompleted;
      }
    ),
    builder.addMatcher(
      authServices.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token || null;
        state.user = payload.data;
        state.isVerified = payload.isVerified;
        state.isCompleted = payload.isCompleted;
      }
    )
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
