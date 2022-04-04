import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
// import type { RootState } from 'store'
import { User } from "types/auth";
import { SuccessDataResponse } from "types/responses";
import { AuthData } from "types/auth";

interface AuthState {
  user: User | null;
  loggedIn: boolean;
  loggingIn: boolean;
}

function isActionWithSuccessAuthDataPayload(
  action: AnyAction
): action is PayloadAction<SuccessDataResponse<AuthData>> {
  return (
    typeof action.payload === "object" &&
    action.payload.success &&
    action.payload.hasOwnProperty("data") &&
    action.payload.data.hasOwnProperty("user") &&
    action.payload.data.hasOwnProperty("token") &&
    action.payload.data.hasOwnProperty("tokenExpiresOn")
  );
}

const authData = localStorage.getItem("auth_data");
const user: User | null = authData && JSON.parse(authData).user;

const initialState: AuthState = user
  ? { loggedIn: true, user, loggingIn: false }
  : { loggedIn: false, user: null, loggingIn: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(login.pending, (state, action) => {
    //   state.loggingIn = true;
    // })

    // builder.addCase(login.fulfilled, saveAuthData)
    // builder.addCase(signup.fulfilled, saveAuthData);

    builder.addMatcher(
      isActionWithSuccessAuthDataPayload,
      (state, action: PayloadAction<SuccessDataResponse<AuthData>>) => {
        state.user = action.payload.data.user;
        state.loggedIn = true;
      }
    );
    //errors reducer captures all errors;
    // builder.addCase(login.rejected, (state, action) => {
    //   console.log('action error: ', action.error);
    //   console.log('action: ', action);
    // })
  },
});

export default authSlice.reducer;
