import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showMyLibFlashcard: false,
};

const breadCrumbStats = createSlice({
  name: "breadCrumbStats",
  initialState,
  reducers: {
    visitMyLibFlashCardStat: (state) => {
      state.showMyLibFlashcard = !state.showMyLibFlashcard;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const breadCrumbStatsActions = breadCrumbStats.actions;

export const breadCrumbStatsReducer = breadCrumbStats.reducer;
