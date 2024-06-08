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
        instructorLogin: (state) => {
            console.log("Login action triggered");
            state.isLogin = true;
        },
        instructorLogout: (state) => {
            console.log("Logout action triggered");
            state.isLogin = false;
        },
        checkInstructorAuthentication: (state) => {
            console.log("Check authentication action triggered");
            const instructorData = cookie.get("instructorData");
            console.log("Retrieved instructorData:", instructorData);
            
            if (!instructorData) {
                state.isLogin = false;
            } 
        }
    }
})

export const { instructorLogin, instructorLogout, checkInstructorAuthentication } = authSlice.actions;

export default authSlice.reducer;
