import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notesId: null,
  filteredNotesData: [],
  myLibraryNotesData: {},
};

const myLibrary = createSlice({
  name: "myLibrary",
  initialState,
  reducers: {
    
    findNotesIdStat: (state, action) => {
      state.notesId = action.payload;
      return state;
    },
    filteredNotes: (state, action) => {
      state.filteredNotesData = action.payload;
      return state;
    },
    myLibraryNotes: (state, action) => {
      state.myLibraryNotesData = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const myLibraryActions = myLibrary.actions;

export const myLibraryReducer = myLibrary.reducer;
