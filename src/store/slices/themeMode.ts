import {createSlice} from "@reduxjs/toolkit";
import {changeMode, toggleMode} from "../actions/themeMode";

interface IThemeMode {
  darkMode: boolean
}

export const initialState: IThemeMode = {
  darkMode: false
};

const themeMode = createSlice({
  name: "themeMode",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeMode, (state, action) => {
        state.darkMode = action.payload;
      })
      .addCase(toggleMode, (state) => {
        state.darkMode = !state.darkMode;
      })
  }
})

export default themeMode.reducer;