import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState, // Perbaiki penulisan nama variabel
  reducers: {
    setLogin(state, action) {
      // Perbaiki penulisan dan pengecekan aksi
      if (action && action.payload && typeof action.payload.isLogin !== 'undefined') {
        state.isLogin = action.payload.isLogin;
      }
    },
  },
});

export const { setLogin } = authSlice.actions;

const authReducer = authSlice.reducer; // Perbaiki penulisan reducer
export default authReducer;
