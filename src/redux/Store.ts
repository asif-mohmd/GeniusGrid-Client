// In redux/Store.ts

import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import { persistReducer as persistReducerFromPersist } from "redux-persist";

import userAuthReducer from './userSlices/authSlice';
import instructorAuthReducer from "./instructorSlices/authSlice";
import registerData from './registerData/registerData';
import instructorDataReducer from './instructorSlices/instructorDataSlice'; // Import the correct reducer for instructor data
import courseData from "./instructorSlices/courseData";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  expire: 60 * 1000, // 1 minute
  // expire: 24 * 60 * 60 * 1000,
}

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  registerData: registerData,
  instructorAuth: instructorAuthReducer,
  instructorData: instructorDataReducer, 
  courseData : courseData
});

const persistReducer = persistReducerFromPersist(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const appStore = configureStore({
  reducer: persistReducer,
});

export default appStore;