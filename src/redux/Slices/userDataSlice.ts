import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: any | null;
  loading: boolean | null;
  error: any | null;
  userImg: string;
}

const initialState: UserState = {
  userData: null,
  loading: null,
  error: null,
  userImg: ""
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      state.userData = action.payload;
    },
    clearUserData: (state) => {
      console.log("clear called");
      state.userData = null;
    },
    updatePicture: (state, action: PayloadAction<string>) => {
      state.userImg = action.payload;
    }
  }
});

export const { setUserData, clearUserData, updatePicture } = userDataSlice.actions;

export default userDataSlice.reducer;
