import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalsReducer from '../services/modalServices/slice';
import { userServices } from '../services/userServices';
import { adminServices } from '../services/adminServices';
import { authServices } from '../services/authService';
import authSlice from '../slices/authSlice';


const rootReducer = combineReducers({
  modals: modalsReducer,
  authSlice: authSlice.reducer,
  authServices: authServices.reducer,
  userServices: userServices.reducer,
  adminServices: adminServices.reducer,
});

const persistConfig = {
  key: 'authSlice',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
