import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface IUser {
  userName: string | null;
  email: string | null;
  id?: number | null;
  token?: string | null;
}

export interface IUserState extends IUser {
  userName: string | null;
  email: string | null;
  id?: number | null;
  token?: string | null;
  error: null | string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialUserState: IUserState = {
  userName: null,
  email: null,
  token: null,
  id: null,
  error: null,
  loading: 'idle'
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },

    removeUser(state) {
      state.email = null;
      state.id = null;
      state.token = null;
    }
  }
});

export const userSelector = (state: RootState) => {
  return state.user;
};

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
