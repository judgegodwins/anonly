import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveAuthData } from 'helpers/authHelpers';
import AuthService from 'services/AuthService';
import { LoginValues, SetEmailValues, SignupValues } from 'types/auth';

export const login = createAsyncThunk(
  'users/login',
  async (loginDetails: LoginValues, thunkAPI) => {
    const response = await AuthService.login(loginDetails);

    saveAuthData(response.data.data);
    return response.data;
  }
)

export const signup = createAsyncThunk(
  'users/signup',
  async (signupDetails: SignupValues, thunkAPI) => {
    const response = await AuthService.signup(signupDetails);

    saveAuthData(response.data.data);

    return response.data;
  }
)