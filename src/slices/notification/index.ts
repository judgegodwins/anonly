import { createSlice, AnyAction, isRejected, PayloadAction } from '@reduxjs/toolkit';
import { SuccessResponse } from 'types/responses';

export interface NotificationItem {
  message: string;
  type: 'success' | 'error';
}

const initialState: NotificationItem[] = [];

function isSuccessfulApiCall(action: AnyAction): action is PayloadAction<SuccessResponse> {
  return typeof action.payload === 'object' && action.payload.success && action.payload.message;
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    pushNotification: (state, action) => {
      state.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(isRejected, (state, action) => {
      state.push({ message: action.error.message || 'Error', type: 'error' });
    });

    builder.addMatcher(isSuccessfulApiCall, (state, action) => {
      state.push({ message: action.payload.message, type: 'success' });
    });
  }
});

export const { pushNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
