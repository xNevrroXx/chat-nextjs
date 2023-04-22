import themeMode from "./slices/themeMode";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {themeMode},
  devTools: process.env.NODE_ENV === "development"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export {store};