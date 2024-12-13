import { createSelector, createSlice } from "@reduxjs/toolkit";

import {
  getUserOnLoadAsync,
  signInAsync,
  requestSignInEmailOtpAsync,
  signInWithOtpAsync,
  signUpAsync,
  signOutAsync,
} from "./user.thunks";

const initialState = {
  currentUser: null,
  currentUserIsLoading: false,
  currentUserError: null,
  emailOtpUserId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetCurrentUserErrorMessage(state) {
      state.currentUserError = null;
    },
    resetEmailOtpUserId(state) {
      state.emailOtpUserId = "";
    },
  },
  selectors: {
    selectCurrentUserSelectors: createSelector(
      (state) => state.currentUser,
      (state) => state.currentUserIsLoading,
      (state) => state.currentUserError,
      (state) => state.emailOtpUserId,
      (currentUser, currentUserIsLoading, currentUserError, emailOtpUserId) => {
        return {
          currentUser,
          currentUserIsLoading,
          currentUserError,
          emailOtpUserId,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserOnLoadAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(getUserOnLoadAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
      })
      .addCase(getUserOnLoadAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = null;
        state.currentUserError = action.payload;
      })
      .addCase(signInAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = null;
        state.currentUserError = action.payload;
      })
      .addCase(requestSignInEmailOtpAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(requestSignInEmailOtpAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.emailOtpUserId = action.payload;
        state.currentUserError = null;
      })
      .addCase(requestSignInEmailOtpAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.emailOtpUserId = "";
        state.currentUserError = action.payload;
      })
      .addCase(signInWithOtpAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signInWithOtpAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.emailOtpUserId = "";
        state.currentUserError = null;
      })
      .addCase(signInWithOtpAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUserError = action.payload;
      })
      .addCase(signUpAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = action.payload;
        state.currentUserError = null;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUser = null;
        state.currentUserError = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.currentUserIsLoading = true;
      })
      .addCase(signOutAsync.fulfilled, (state) => {
        state.currentUserIsLoading = false;
        state.currentUser = null;
        state.currentUserError = null;
        state.emailOtpUserId = "";
      })
      .addCase(signOutAsync.rejected, (state, action) => {
        state.currentUserIsLoading = false;
        state.currentUserError = action.payload;
      });
  },
});

export const { resetCurrentUserErrorMessage, resetEmailOtpUserId } = userSlice.actions;
export const { selectCurrentUserSelectors } = userSlice.selectors;

export const userReducer = userSlice.reducer;
