import {createAction} from "@reduxjs/toolkit";

export const changeMode = createAction<boolean>("themeMode/changeMode");
export const toggleMode = createAction("themeMode/toggleMode");