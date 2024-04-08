import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    formData: any | null;
 
}

const initialState: UserState = {
    formData: null,

};

const registerDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setRegisterData: (state, action: PayloadAction<any>) => {
      state.formData = action.payload;
    },
    clearRegisterData: (state) => {
      console.log("clear called");
      state.formData = null;
    },

  }
});

export const { setRegisterData, clearRegisterData } = registerDataSlice.actions;

export default registerDataSlice.reducer;
