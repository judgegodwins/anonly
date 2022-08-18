import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "services/AuthService";

export const updateTheme = createAsyncThunk(
  'users/updateTheme',
  async (themeColor: string) => {
    const response = await AuthService.updateTheme(themeColor);

    return themeColor;
  }
)