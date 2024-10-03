import {combineReducers} from '@reduxjs/toolkit';
import {baseApi} from '../services/api';
import userReducer from './slices/user.slice';

export default combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
});
