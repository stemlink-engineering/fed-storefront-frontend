// features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    clearAuthToken: (state) => {
      state.token = null;
    },
  },
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;

export default authSlice.reducer;
