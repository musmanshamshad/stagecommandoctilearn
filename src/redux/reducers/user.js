import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: null,
  contact: null,
  country: null,
  fName: null,
  grade: null,
  img: null,
  lName: null,
  school: null,
  id: null,
  email: null,
  stats: [],
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      const { email, firstName, lastName, publicUrl, id, stats } =
        action.payload;
      const { city, country, gradeLevel, phone, schoolName } =
        action.payload.userProfile;
      state.city = city;
      state.contact = phone;
      state.country = country;
      state.fName = firstName;
      state.lName = lastName;
      state.grade = gradeLevel;
      state.img = publicUrl;
      state.school = schoolName;
      state.id = id;
      state.email = email;
      state.stats = stats === undefined ? '' : [...stats];
    },

    updateProfileImage: (state, action) => {
      state.img = action.payload;
    },

    logOutHandler: (state) => {
      state.city = null;
      state.contact = null;
      state.country = null;
      state.fName = null;
      state.lName = null;
      state.grade = null;
      state.img = null;
      state.school = null;
      state.id = null;
      state.email = null;
    },
  },
});

export const userActions = user.actions;

export const userReducer = user.reducer;
