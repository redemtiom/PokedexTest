import {configureStore} from '@reduxjs/toolkit/react'; //! remove this line if you have problems
import {setupListeners} from '@reduxjs/toolkit/query';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';
import {baseApi} from '../services/api';

const persistConfig = {
  key: 'pokemon',
  storage: AsyncStorage,
  blacklist: ['baseApi'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(baseApi.middleware),
});

//* Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
//* Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//* optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

//* Creamos el persistor para rehidratar el store desde el almacenamiento
export const persistor = persistStore(store);
