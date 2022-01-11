import { configureStore } from '@reduxjs/toolkit';
import { Reducer, AnyAction } from 'redux';
import authReducer from 'slices/auth';
import errorReducer from 'slices/error';

const store = configureStore({
  reducer: {
    auth: authReducer,
    errors: errorReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;