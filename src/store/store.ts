import {configureStore} from '@reduxjs/toolkit/react'; //! remove this line if you have problems
import {setupListeners} from '@reduxjs/toolkit/query';
import rootReducer from './rootReducer';
import {baseApi} from '../services/api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

//* Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
//* Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//* optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
