/* eslint-disable sonarjs/no-duplicate-string */
import models from "@models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ErrorsState } from "../../../models";

const initialState: ErrorsState = { apiErrors: [] };

const slice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addApiError: (state, action: PayloadAction<models.Error>) => {
      state.apiErrors.push(action.payload);
    },
    clearApiErrors: (state) => {
      state.apiErrors = [];
    }
  }
});

export const { addApiError, clearApiErrors } = slice.actions;

export default slice;
