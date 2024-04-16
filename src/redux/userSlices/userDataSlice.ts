import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: object | null;
  loading: boolean | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setUserData: (state, action: PayloadAction<object>) => {
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
