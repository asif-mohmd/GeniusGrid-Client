// In redux/Store.ts

import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import userDataSlice from './Slices/userDataSlice';
import { configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({
  auth: authReducer,
  userData: userDataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const appStore = configureStore({
  reducer: rootReducer,
});

export default appStore;
