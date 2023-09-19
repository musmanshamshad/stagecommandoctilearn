import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentsInLocalStorage:[]
};

const commentsInLocalStorage = createSlice({
  name: "commentsInLocalStorage",
  initialState,
    reducers: {
    changeInCommentsInLocalStorage: (state,action) => {
      state.commentsInLocalStorage = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const commentsInLocalStorageActions =
commentsInLocalStorage.actions;

export const commentsInLocalStorageReducer =
commentsInLocalStorage.reducer;
