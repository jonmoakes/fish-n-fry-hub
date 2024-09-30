import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addOrderToDatabaseAsync,
  deleteUserCartItemsAsync,
  deleteDocumentAsync,
} from "./database-management.thunks";

const INITIAL_STATE = {
  databaseManagementIsLoading: false,
  addOrderResult: "",
  addOrderError: null,
  deleteUserCartItemsResult: "",
  deleteUserCartItemsError: null,
  formattedStringOfOrderForEmail: "",
  errorIdFromEmail: "",
  dataToUpdateDocument: {},
  deleteDocumentResult: "",
  deleteDocumentError: null,
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
    setDataToUpdateDocument(state, action) {
      state.dataToUpdateDocument = action.payload;
    },
    resetDataToUpdateDocument(state) {
      state.dataToUpdateDocument = {};
    },
    resetDeleteDocumentResult(state) {
      state.deleteDocumentResult = "";
    },
    resetDeleteDocumentError(state) {
      state.deleteDocumentError = null;
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
      })
      .addCase(deleteDocumentAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(deleteDocumentAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.deleteDocumentResult = "fulfilled";
        state.deleteDocumentError = null;
      })
      .addCase(deleteDocumentAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.deleteDocumentResult = "rejected";
        state.deleteDocumentError = action.payload;
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
      (state) => state.dataToUpdateDocument,
      (state) => state.deleteDocumentResult,
      (state) => state.deleteDocumentError,
      (
        databaseManagementIsLoading,
        addOrderResult,
        addOrderError,
        deleteUserCartItemsResult,
        deleteUserCartItemsError,
        formattedStringOfOrderForEmail,
        errorIdFromEmail,
        dataToUpdateDocument,
        deleteDocumentResult,
        deleteDocumentError
      ) => {
        return {
          databaseManagementIsLoading,
          addOrderResult,
          addOrderError,
          deleteUserCartItemsResult,
          deleteUserCartItemsError,
          formattedStringOfOrderForEmail,
          errorIdFromEmail,
          dataToUpdateDocument,
          deleteDocumentResult,
          deleteDocumentError,
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
  setDataToUpdateDocument,
  resetDataToUpdateDocument,
  resetDeleteDocumentResult,
  resetDeleteDocumentError,
  resetDatabaseManagementState,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
