import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";


const initialState = {
};


const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    // リスト全て削除
    deleteList: (state, action) => {
      db.collection('save-code').doc(action.payload).delete();
      alert("データが削除されました。")
    }
  },
});

export const {deleteList} = buttonSlice.actions;
export default buttonSlice.reducer;
