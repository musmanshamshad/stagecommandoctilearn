import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isHighlighting: false,
  searchedTextValue: '',
  updateMyLibraryData: false,
  jsonDataHandler: '',
  htmlDataHandler: '',
};

const myLibraryHighlight = createSlice({
  name: "myLibraryHighlight",
  initialState,
  reducers: {
    toggleHighlightState: (state) => {
      state.isHighlighting = !state.isHighlighting;
      return state;
    },

    searchedValueState: (state, action) => {
      state.searchedTextValue = action.payload;
      return state;
    },
    jsonDataHandlerState: (state, action) => {
      state.jsonDataHandler = action.payload;
      return state;
    },
    htmlDataHandlerState: (state, action) => {
      state.htmlDataHandler = action.payload;
      return state;
    },
    updateMyLibraryState :(state) => {
      
      state.updateMyLibraryData = !state.updateMyLibraryData;
      return state;
    }
  },
});

// Action creators are generated for each case reducer function
export const myLibraryHighlightActions =
  myLibraryHighlight.actions;

export const myLibraryHighlightReducer =
  myLibraryHighlight.reducer;
