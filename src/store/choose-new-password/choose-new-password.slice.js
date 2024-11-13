import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getChooseNewPasswordResultAsync } from "./choose-new-password.thunks";

const defaultNewPasswordDetails = {
  newPassword: "",
  confirmNewPassword: "",
};

const INITIAL_STATE = {
  newPasswordDetails: defaultNewPasswordDetails,
  newPasswordResultIsLoading: false,
  newPasswordResult: "",
  newPasswordError: null,
};

export const chooseNewPasswordSlice = createSlice({
  name: "chooseNewPassword",
  initialState: INITIAL_STATE,
  reducers: {
    setNewPasswordDetails(state, action) {
      state.newPasswordDetails = action.payload;
    },
    resetPasswordResultError(state) {
      state.newPasswordError = null;
    },
    resetChooseNewPasswordState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectChooseNewPasswordSelectors: createSelector(
      (state) => state.newPasswordDetails,
      (state) => state.newPasswordResultIsLoading,
      (state) => state.newPasswordResult,
      (state) => state.newPasswordError,
      (
        newPasswordDetails,
        newPasswordResultIsLoading,
        newPasswordResult,
        newPasswordError
      ) => {
        return {
          newPasswordDetails,
          newPasswordResultIsLoading,
          newPasswordResult,
          newPasswordError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChooseNewPasswordResultAsync.pending, (state) => {
        state.newPasswordResultIsLoading = true;
      })
      .addCase(getChooseNewPasswordResultAsync.fulfilled, (state) => {
        state.newPasswordResultIsLoading = false;
        state.newPasswordError = null;
        state.newPasswordResult = "success";
      })
      .addCase(getChooseNewPasswordResultAsync.rejected, (state, action) => {
        state.newPasswordResultIsLoading = false;
        state.newPasswordError = action.payload;
        state.newPasswordResult = "";
      });
  },
});

export const {
  setNewPasswordDetails,
  resetPasswordResultError,
  resetChooseNewPasswordState,
} = chooseNewPasswordSlice.actions;
export const { selectChooseNewPasswordSelectors } =
  chooseNewPasswordSlice.selectors;

export const chooseNewPasswordReducer = chooseNewPasswordSlice.reducer;
