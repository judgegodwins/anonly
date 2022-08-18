import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { getProfile } from "slices/auth/actions";
import { updateTheme } from "./actions";

const initialState = {
  screenPadding: {
    mobile: "25px",
    desktop: null,
  },
  color: {
    primary: "#2185DC",
    adjustPrimary: "#2185DE",
    semiPrimary: "rgba(255, 255, 255, 0.25)",
    secondary: "#F0F2F4",
    white: "#FFF",
    text: "#243442",
    textSecondary: "#8F9AA3",
    success: "#2e7d32",
    error: "#d32f2f",
    headerText: {
      firstText: {
        primary: "#A6CFF2",
        secondary: "#8F9AA3",
      },
      outstandingText: {
        primary: "#FFF",
        secondary: "#243442",
      },
    },
  },
};

export type ThemeState = typeof initialState;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateThemeColor: (state, action: { payload: string; type: string; }) => {
      state.color.primary = action.payload;
      state.color.adjustPrimary = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      console.log('Action Payload: ', action.payload);
      if (action.payload.data.clientTheme) {
        state.color.primary = action.payload.data.clientTheme;
        state.color.adjustPrimary = action.payload.data.clientTheme;
      }
    });

    builder.addCase(updateTheme.fulfilled, (state, action) => {
      state.color.primary = action.payload;
      state.color.adjustPrimary = action.payload;
    })
  }
});

export const { updateThemeColor } = themeSlice.actions;

export default themeSlice.reducer;