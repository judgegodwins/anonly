import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAuthData, saveAuthData } from "helpers/authHelpers";
import AuthService from "services/AuthService";
import { LoginValues, SetEmailValues, SignupValues } from "types/auth";

export const login = createAsyncThunk(
  "users/login",
  async (loginDetails: LoginValues, thunkAPI) => {
    const response = await AuthService.login(loginDetails);

    saveAuthData(response.data.data.token);
    return response.data;
  }
);

export const signup = createAsyncThunk(
  "users/signup",
  async (signupDetails: SignupValues, thunkAPI) => {
    const response = await AuthService.signup(signupDetails);

    saveAuthData(response.data.data.token);

    return response.data;
  }
);

export const getProfile = createAsyncThunk<
  Awaited<ReturnType<typeof AuthService.getProfile>>["data"],
  undefined,
  { rejectValue: { status: number } }
>("users/getProfile", async (t: undefined, thunkAPI) => {
  try {
    const response = await AuthService.getProfile();
    return response.data;
  } catch (e: any) {
    if (e.response && e.response.status === 401) {
      console.log("RESPONSE NO AUTH");
      await deleteAuthData();
      return thunkAPI.rejectWithValue({ status: e.response.status });
    } else {
      throw e;
    }
  }
});
