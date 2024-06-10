import { createSlice } from "@reduxjs/toolkit";
import cookie from "js-cookie"

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
        adminLogin: (state) => {
            state.isLogin = true;
        },
        adminLogout: (state) => {
            state.isLogin = false;
        },
        checkAdminAuthentication: (state) => {
            const adminData = cookie.get("adminData");
            
            if (!adminData) {
                state.isLogin = false;
            } 
        }
    }
})

export const { adminLogin, adminLogout, checkAdminAuthentication } = authSlice.actions;

export default authSlice.reducer;
