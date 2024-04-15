import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLogin: boolean;
}

const initialState: AuthState = {
  isLogin: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isLogin = true;
    },
    userLogout: (state) => {
      state.isLogin = false;
    }
  }
});

export const { userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;
