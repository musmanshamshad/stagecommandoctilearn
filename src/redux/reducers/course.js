import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const course = createSlice({
  name: "course",
  initialState,

  reducers: {
    addCourse: (state, action) => {
      const temp = { ...action.payload };
      state = { ...state, ...temp };
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const courseActions = course.actions;

export const courseReducer = course.reducer;
