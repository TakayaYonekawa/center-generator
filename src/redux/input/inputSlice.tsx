import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rangeVals: 500,
  rangeVals02: 500,
  rangeVals03: "00ff7f",
  rangeVals04: "333333",
  rangeVals05: "テキストを変更しよう",
  submitText03: "00ff7f",
  submitText04: "333333",
  loading: true,
};


const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    // Width
    handleChange: (state, action) => {
      const rangeVal = action.payload;
      state.rangeVals = rangeVal;
    },
    // Height
    handleChange02: (state, action) => {
      const rangeVal02 = action.payload;
      state.rangeVals02 = rangeVal02;
    },
    // 背景
    handleBgVal: (state, action) => {
      state.rangeVals03 = action.payload;
    },
    // 文字色
    handleColorVal: (state, action) => {
      state.rangeVals04 = action.payload;
    },
    handleEnterCheck: (state, action) => {
      if (action.payload.key === "Enter") {
        if (action.payload.target.value.length > 6) {
          alert("6文字以内に収めましょう");
          return;
        }
        state.loading = false;
      }
    },
    handleEnter03: (state) => {
      state.loading = true;
      state.submitText03 = state.rangeVals03;
    },
    handleEnter04: (state) => {
      state.loading = true;
      state.submitText04 = state.rangeVals04;
    },
    // テキスト
    handleChange05: (state, action) => {
      const rangeVal05 = action.payload.value;
      if (rangeVal05.length > 30) {
        alert("30字以内に収めてください");
        return;
      }
      state.rangeVals05 = rangeVal05;
    },
    hanldeSubmit: (state) => {
      const regex = /^[0-9a-zA-Z]+$/;

      if (state.rangeVals03.length < 6 || state.rangeVals04.length < 6) {
        alert("文字コードは6文字です。");
        return;
      } else if (
        !regex.test(state.rangeVals03) ||
        !regex.test(state.rangeVals04)
      ) {
        alert("半角英数字で書きましょう");
        return;
      }
    },
  },
});

export const {
  handleChange,
  handleChange02,
  handleBgVal,
  handleColorVal,
  handleEnterCheck,
  handleChange05,
  handleEnter03,
  handleEnter04,
  hanldeSubmit,
} = inputSlice.actions;
export default inputSlice.reducer;
