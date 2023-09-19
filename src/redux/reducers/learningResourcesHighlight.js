import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isHighlighting: false,
};

const learningResourcesHighlight = createSlice({
  name: "learningResourcesHighlight",
  initialState,
  reducers: {
    toggleHighlightState: (state) => {
      state.isHighlighting = !state.isHighlighting;
      return state;
    },
    highlightHandler: (state, action) => {
      state.isHighlighting = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const learningResourcesHighlightActions =
  learningResourcesHighlight.actions;

export const learningResourcesHighlightReducer =
  learningResourcesHighlight.reducer;
