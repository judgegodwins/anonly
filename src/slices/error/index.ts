import { SerializedError, Action, PayloadAction, AnyAction, createSlice } from '@reduxjs/toolkit'
import { serializeError } from 'serialize-error';


export type ErrorState = (SerializedError | Error)[];

const initialState: ErrorState = [] as (SerializedError | Error)[]


interface RejectedAction extends Action {
  error: Error
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    pushError: (state, action: PayloadAction<string | SerializedError>) => {
      
      state.push(
        serializeError(
          typeof action.payload === "string"
            ? new Error(action.payload)
            : action.payload
        )
      );
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      isRejectedAction,
      (state, action) => {
        state.push(action.error);
      }
    )
  }
})

export const { pushError } = errorSlice.actions;
export default errorSlice.reducer;