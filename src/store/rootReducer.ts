import {combineReducers} from '@reduxjs/toolkit';
import {baseApi} from '../services/api';

export default combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
});
