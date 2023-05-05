import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  email: null | string;
  id: null | string;
  isAuth: boolean;
}

const initialState: IUserState = {
  email: null,
  id: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserState>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isAuth = action.payload.isAuth;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.isAuth = false;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
