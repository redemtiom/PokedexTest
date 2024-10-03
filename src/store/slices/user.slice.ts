import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {UserModel} from '../../models/user.model';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
  },
  reducers: {
    setUsername: (state, action: PayloadAction<UserModel>) => {
      state.username = action.payload.username;
    },
  },
});

export const {setUsername} = userSlice.actions;

export default userSlice.reducer;
