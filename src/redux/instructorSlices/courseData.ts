import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICreateCourse1 , ICreateCourse2, ICreateCourse3 } from "../../interfaces/IInstructorInterface";



interface InitialStateType {
    courseData1: ICreateCourse1 | null;
    courseData2: ICreateCourse2 | null;
    courseData3: ICreateCourse3 | null;
  }
  
  const initialState: InitialStateType = {
      courseData1: null,
      courseData2: null,
      courseData3: null
  };
  
const createCourseData = createSlice({
    name: "courseData",
    initialState,
    reducers: {
        setCourseData1:(state,action:PayloadAction<ICreateCourse1>) =>{
            console.log("am action",action.payload,"reduxx")
            state.courseData1 = action.payload;
        },
        setCourseData2: (state,action:PayloadAction<ICreateCourse2>) =>{
            console.log(action.payload,"==========------------")
            state.courseData2 = action.payload;
        },
        
        setCourseData3:(state,action:PayloadAction<ICreateCourse3>) =>{
            state.courseData3 = action.payload;
        },
    }
})

export const {setCourseData1, setCourseData2, setCourseData3} = createCourseData.actions;

export default createCourseData.reducer;