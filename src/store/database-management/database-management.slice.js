import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addOrderToDatabaseAsync,
  deleteUserCartItemsAsync,
} from "./database-management.thunks";

const INITIAL_STATE = {
  databaseManagementIsLoading: false,
  addOrderResult: "",
  addOrderError: null,
  deleteUserCartItemsResult: "",
  deleteUserCartItemsError: null,
  formattedStringOfOrderForEmail: "",
  errorIdFromEmail: "",
};

export const databaseManagementSlice = createSlice({
  name: "databaseManagement",
  initialState: INITIAL_STATE,
  reducers: {
    resetAddOrderResult(state) {
      state.addOrderResult = "";
    },
    resetAddOrderError(state) {
      state.addOrderError = null;
    },
    resetDeleteUserCartItemsResult(state) {
      state.deleteUserCartItemsResult = null;
    },
    resetDeleteUserCartItemsError(state) {
      state.deleteUserCartItemsError = null;
    },
    setFormattedStringOfOrderForEmail(state, action) {
      state.formattedStringOfOrderForEmail = action.payload;
    },
    setErrorIdFromEmail(state, action) {
      state.errorIdFromEmail = action.payload;
    },
    resetDatabaseManagementState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrderToDatabaseAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(addOrderToDatabaseAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.addOrderResult = "fulfilled";
        state.addOrderError = null;
      })
      .addCase(addOrderToDatabaseAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.addOrderResult = "rejected";
        state.addOrderError = action.payload;
      })
      .addCase(deleteUserCartItemsAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(deleteUserCartItemsAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.deleteUserCartItemsResult = "fulfilled";
        state.deleteUserCartItemsError = null;
      })
      .addCase(deleteUserCartItemsAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.deleteUserCartItemsResult = "rejected";
        state.deleteUserCartItemsError = action.payload;
      });
  },
  selectors: {
    selectDatabaseManagementSelectors: createSelector(
      (state) => state.databaseManagementIsLoading,
      (state) => state.addOrderResult,
      (state) => state.addOrderError,
      (state) => state.deleteUserCartItemsResult,
      (state) => state.deleteUserCartItemsError,
      (state) => state.formattedStringOfOrderForEmail,
      (state) => state.errorIdFromEmail,
      (
        databaseManagementIsLoading,
        addOrderResult,
        addOrderError,
        deleteUserCartItemsResult,
        deleteUserCartItemsError,
        formattedStringOfOrderForEmail,
        errorIdFromEmail
      ) => {
        return {
          databaseManagementIsLoading,
          addOrderResult,
          addOrderError,
          deleteUserCartItemsResult,
          deleteUserCartItemsError,
          formattedStringOfOrderForEmail,
          errorIdFromEmail,
        };
      }
    ),
  },
});

export const {
  resetAddOrderResult,
  resetAddOrderError,
  resetDeleteUserCartItemsResult,
  resetDeleteUserCartItemsError,
  setFormattedStringOfOrderForEmail,
  setErrorIdFromEmail,
  resetDatabaseManagementState,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
