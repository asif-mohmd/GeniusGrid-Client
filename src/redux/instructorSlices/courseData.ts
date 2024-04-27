import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICreateCourse1 , ICreateCourse2, ICreateCourse3 } from "../../interfaces/ICourseInterface";



interface InitialStateType {
    courseData1: ICreateCourse1 | null;
    courseData2: ICreateCourse2 | null;
    courseData3: ICreateCourse3 | null;
    privateIdStore : string;
  }
  
  const initialState: InitialStateType = {
      courseData1: null,
      courseData2: null,
      courseData3: null,
      privateIdStore: "",

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
            console.log(action.payload,"==========---course22222---------")
            state.courseData2 = action.payload;
        },
        
        setCourseData3:(state,action:PayloadAction<ICreateCourse3>) =>{
            console.log(action.payload,"===========payl;aodddddddddddddd============")
            state.courseData3 = action.payload;
        },
        setPrivateId:(state,action)=>{
            console.log(action.payload,"-----redux",typeof(action.payload))
            state.privateIdStore = action.payload
        },
        setCourseData1Empty:(state)=>{
            state.courseData1 = null;
        },
        setCourseData3Empty:(state)=>{
            state.courseData3 = null;
        }
    }
})

export const {setCourseData1, setCourseData2, setCourseData3 ,setPrivateId ,setCourseData1Empty,setCourseData3Empty} = createCourseData.actions;

export default createCourseData.reducer;