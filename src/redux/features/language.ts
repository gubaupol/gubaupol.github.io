import { createSlice } from "@reduxjs/toolkit";

export type availableLanguagesType = "en" | "es" | "ca";

const initialState = {
  language: "en",
};

// create a slice for terminals
export const stickiesSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
export const actualLanguage = (state: any) => state.language;

export const { changeLanguage: changeLanguageActionCreator } =
  stickiesSlice.actions;

export default stickiesSlice.reducer;
