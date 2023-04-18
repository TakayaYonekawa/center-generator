import { createSlice } from "@reduxjs/toolkit";
import {auth} from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const initialState = {
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInWithGoogle: () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    },
  },
});

export const {signInWithGoogle} = authSlice.actions;
export default authSlice.reducer;
