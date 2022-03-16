import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.selected = "dark";
    },
    setWhiteTheme: (state) => {
      state.selected = "white";
    },
  },
});

export const { setDarkTheme, setWhiteTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.selected;

export default themeSlice.reducer;
