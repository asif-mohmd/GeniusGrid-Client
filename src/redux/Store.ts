// In redux/Store.ts

import { combineReducers } from '@reduxjs/toolkit';
import userAuthReducer from './userSlices/authSlice';
import userDataSlice from './userSlices/userDataSlice';
import { configureStore } from '@reduxjs/toolkit';
import instructorAuthReducer from "./instructorSlices/authSlice"

const rootReducer = combineReducers({
  userAuth: userAuthReducer,
  userData: userDataSlice,
  instructorAuth: instructorAuthReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const appStore = configureStore({
  reducer: rootReducer,
});

export default appStore;
