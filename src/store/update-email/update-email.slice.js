import { createSelector, createSlice } from "@reduxjs/toolkit";
import { updateEmailAsync } from "./update-email.thunks";

const defaultUpdateEmailDetails = {
  newEmail: "",
  confirmNewEmail: "",
  password: "",
};
const INITIAL_STATE = {
  updateEmailIsLoading: false,
  updateEmailDetails: defaultUpdateEmailDetails,
  updateEmailResult: "",
  updateEmailError: null,
};

export const updateEmailSlice = createSlice({
  name: "updateEmail",
  initialState: INITIAL_STATE,
  reducers: {
    setUpdateEmailDetails(state, action) {
      state.updateEmailDetails = action.payload;
    },
    resetUpdateEmailResult(state) {
      state.updateEmailResult = "";
    },
    resetUpdateEmailError(state) {
      state.updateEmailError = null;
    },
    resetUpdateEmailState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectUpdateEmailSelectors: createSelector(
      (state) => state.updateEmailIsLoading,
      (state) => state.updateEmailDetails,
      (state) => state.updateEmailResult,
      (state) => state.updateEmailError,

      (
        updateEmailIsLoading,
        updateEmailDetails,
        updateEmailResult,
        updateEmailError
      ) => {
        return {
          updateEmailIsLoading,
          updateEmailDetails,
          updateEmailResult,
          updateEmailError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateEmailAsync.pending, (state) => {
        state.updateEmailIsLoading = true;
      })
      .addCase(updateEmailAsync.fulfilled, (state) => {
        state.updateEmailIsLoading = false;
        state.updateEmailResult = "fulfilled";
        state.updateEmailDetails = defaultUpdateEmailDetails;
        state.updateEmailError = null;
      })
      .addCase(updateEmailAsync.rejected, (state, action) => {
        state.updateEmailIsLoading = false;
        state.updateEmailResult = "rejected";
        state.updateEmailError = action.payload;
      });
  },
});

export const {
  setUpdateEmailDetails,
  resetUpdateEmailState,
  resetUpdateEmailResult,
  resetUpdateEmailError,
} = updateEmailSlice.actions;
export const { selectUpdateEmailSelectors } = updateEmailSlice.selectors;

export const updateEmailReducer = updateEmailSlice.reducer;
