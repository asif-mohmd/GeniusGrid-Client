import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  instructorData: any | null;
  loading: boolean | null;
  error: any | null;
  userImg: string;
}

const initialState: UserState = {
  instructorData: null,
  loading: null,
  error: null,
  userImg: ""
};

const instructorDataSlice = createSlice({
  name: "instructorData",
  initialState,
  reducers: {
    setInstructorData: (state, action: PayloadAction<any>) => {
      state.instructorData = action.payload;
    },
    clearInstructorData: (state) => {
      console.log("clear called");
      state.instructorData = null;
    },
    updatePicture: (state, action: PayloadAction<string>) => {
      state.userImg = action.payload;
    }
  }
});

export const { setInstructorData, clearInstructorData, updatePicture } = instructorDataSlice.actions;

export default instructorDataSlice.reducer;
