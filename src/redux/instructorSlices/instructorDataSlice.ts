import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstructorData } from "../../interfaces/IInstructorInterface";
// import { InstructorDataPayload } from "../../interfaces/ICommonInterface";



const initialState: IInstructorData = {
  instructorData: null,
  

};

const instructorDataSlice = createSlice({
  name: "instructorData",
  initialState,
  reducers: {
    setInstructorData: (state, action: PayloadAction<IInstructorData>) => {
    console.log("-------------")
      console.log(action.payload,"------------")
      state.instructorData = action.payload;
    },
    clearInstructorData: (state) => {
      console.log("clear called");
      state.instructorData = null;
    },
    // updatePicture: (state, action: PayloadAction<string>) => {
    //   state.userImg = action.payload;
    // }
  }
});

export const { setInstructorData, clearInstructorData } = instructorDataSlice.actions;

export default instructorDataSlice.reducer;
