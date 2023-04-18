import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import inputSlice from "./redux/input/inputSlice";
import authSlice from "./redux/firebase/authSlice";
import buttonSlice from "./redux/firebase/buttonSlice";

export const store = configureStore({
  reducer: {
    input: inputSlice,
    auth: authSlice,
    button: buttonSlice,
  },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
