import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterSlice } from './filterSlice';
import { contactsApi } from './itemsSlice';
// import { authSlice } from './auth/auth-slice';
// import operations from './auth/authOperations';
import { authReducer } from './auth';
// import { authApi } from './auth/authSlice';
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

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// створюю сховище стор , яке зберігає стан нашого додатку та методи роботи з ним (редюсери) -функціі, які реагують на дії
export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    // [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // додаемо функціі npослойки з дефолтними значенням та з нашого contactsApi
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   contactsApi.middleware,
  // ],
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    // authApi.middleware,
  ],
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);
