import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
// import type { RootState } from 'store'
import { User } from "types/auth";
import { SuccessDataResponse } from "types/responses";
import { AuthData } from "types/auth";
import { getProfile } from "./actions";

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


const tokenExists = Boolean(localStorage.getItem("auth_data"));

const initialState: AuthState = { loggedIn: tokenExists, user: null, loggingIn: true }

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      if (state.user) state.user.username = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.user = action.payload.data;
    });

    builder.addCase(getProfile.rejected, (state, action) => {
      console.log('ACTION ERROR PAYLOAD: ', action.payload, action.error);
      state.loggedIn = false;
      state.loggingIn = false;
    })
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
export const { updateUsername } = authSlice.actions

export default authSlice.reducer;
