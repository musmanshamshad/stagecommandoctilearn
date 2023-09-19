import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};

const learningResourcesNotesListController = createSlice({
  name: "learningResourcesNotesListController",
  initialState,
  reducers: {
    toggleValue: (state) => {
      state.value = !state.value;
    },
    setValue: (state, { payload }) => {
      state.value = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const learningResourcesNotesListControllerActions =
  learningResourcesNotesListController.actions;

export const learningResourcesNotesListControllerReducer =
  learningResourcesNotesListController.reducer;
