// In redux/Store.ts

import userAuthReducer from './userSlices/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import instructorAuthReducer from "./instructorSlices/authSlice"
import registerData from './registerData/registerData';
import storage from "redux-persist/lib/storage"
import {persistReducer as persistReducerFromPersist} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"

const persistConfig = {
  key : "root",
  version: 1,
  storage
}


const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  registerData: registerData,
  instructorAuth: instructorAuthReducer,
  instructorData : instructorAuthReducer
});

const persistReducer = persistReducerFromPersist(persistConfig,rootReducer)

export type RootState = ReturnType<typeof rootReducer>;

const appStore = configureStore({
  reducer: persistReducer,
});

export default appStore;
