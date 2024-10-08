import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addOrderToDatabaseAsync,
  deleteUserCartItemsAsync,
  deleteDocumentAsync,
  dbManageAddOrderToDatabaseAsync,
  updateProductPricesAsync,
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
  updateAttributeResult: "",
  updateAttributeError: null,
  productToEdit: {},
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
    setProductToEdit(state, action) {
      state.productToEdit = action.payload;
    },
    updateProductToEdit: (state, action) => {
      state.productToEdit = action.payload;
    },
    resetProductToEdit(state) {
      state.productToEdit = {};
    },
    resetUpdateAttributeResult(state) {
      state.updateAttributeResult = "";
    },
    resetUpdateAttributeError(state) {
      state.updateAttributeError = null;
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
      })
      .addCase(dbManageAddOrderToDatabaseAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(dbManageAddOrderToDatabaseAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.addOrderResult = "fulfilled";
        state.addOrderError = null;
      })
      .addCase(dbManageAddOrderToDatabaseAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.addOrderResult = "rejected";
        state.addOrderError = action.payload;
      })
      .addCase(updateProductPricesAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(updateProductPricesAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.updateAttributeResult = "fulfilled";
        state.updateAttributeError = null;
      })
      .addCase(updateProductPricesAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.updateAttributeResult = "rejected";
        state.updateAttributeError = action.payload;
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
      (state) => state.productToEdit,
      (state) => state.updateAttributeResult,
      (state) => state.updateAttributeError,
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
        deleteDocumentError,
        productToEdit,
        updateAttributeResult,
        updateAttributeError
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
          productToEdit,
          updateAttributeResult,
          updateAttributeError,
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
  setProductToEdit,
  updateProductToEdit,
  resetProductToEdit,
  resetUpdateAttributeResult,
  resetUpdateAttributeError,
  resetDatabaseManagementState,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
