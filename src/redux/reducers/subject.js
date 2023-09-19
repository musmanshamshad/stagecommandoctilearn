import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  expandAccordian: false,
  unitsValue: 0,
};

const subject = createSlice({
  name: "subject",
  initialState,
  reducers: {
    accordianExpandHandler: (state) => {
      state.expandAccordian = !state.expandAccordian;
      return state;
    },
    stopExpandAccordion: (state) => {
      state.expandAccordian = false;
      return state;
    },
    unitsValueHander: (state, action) => {
      state.unitsValue = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const subjectActions = subject.actions;

export const subjectReducer = subject.reducer;
