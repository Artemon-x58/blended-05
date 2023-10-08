import { configureStore } from '@reduxjs/toolkit';
import { currencySliceReducer } from './createSlice';
import storage from 'redux-persist/lib/storage';
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

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['baseCurrency'],
};

export const store = configureStore({
  reducer: persistReducer(currencyPersistConfig, currencySliceReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
