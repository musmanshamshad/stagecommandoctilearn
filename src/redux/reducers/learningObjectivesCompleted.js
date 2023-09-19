import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  learningObjectivesCompleted: [],
};

const learningObjectivesCompleted = createSlice({
  name: "learningObjectivesCompleted",
  initialState,
  reducers: {
    updateLearningObjectives: (state, action) => {
      const data = [...action.payload];
      state.learningObjectivesCompleted = data;
      return state;
    },

    toggleSpecificLearningObjectiveState: (state, action) => {
      const { id, value } = action.payload;
      const toChange = state.learningObjectivesCompleted.find(
        (el) => el.id === id
      );
      if (typeof value === "undefined") {
        // case if no value is provided
        toChange.checked = !toChange.checked;
      } else {
        // case if value is explicitly provided
        toChange.checked = value;
      }

      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const learningObjectivesCompletedActions =
  learningObjectivesCompleted.actions;

export const learningObjectivesCompletedReducer =
  learningObjectivesCompleted.reducer;
