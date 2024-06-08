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
            console.log("Login action triggered");
            state.isLogin = true;
        },
        adminLogout: (state) => {
            console.log("Logout action triggered");
            state.isLogin = false;
        },
        checkAdminAuthentication: (state) => {
            console.log("Check authentication action triggered");
            const adminData = cookie.get("adminData");
            console.log("Retrieved instructorData:", adminData);
            
            if (!adminData) {
                state.isLogin = false;
            } 
        }
    }
})

export const { adminLogin, adminLogout, checkAdminAuthentication } = authSlice.actions;

export default authSlice.reducer;
