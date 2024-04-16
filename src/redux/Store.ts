// In redux/Store.ts

import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import { persistReducer as persistReducerFromPersist } from "redux-persist";

import userAuthReducer from './userSlices/authSlice';
import instructorAuthReducer from "./instructorSlices/authSlice";
import registerData from './registerData/registerData';
import instructorDataReducer from './instructorSlices/instructorDataSlice'; // Import the correct reducer for instructor data

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  registerData: registerData,
  instructorAuth: instructorAuthReducer,
  instructorData: instructorDataReducer, // Use the correct reducer for instructor data
});

const persistReducer = persistReducerFromPersist(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const appStore = configureStore({
  reducer: persistReducer,
});

export default appStore;
