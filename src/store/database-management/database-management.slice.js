import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addOrderToDatabaseAsync,
  deleteUserCartItemsAsync,
  deleteDocumentAsync,
  dbManageAddOrderToDatabaseAsync,
  updateProductPricesAsync,
  createNewMenuProductAsync,
  fetchOptionsPricesAsync,
  updateOptionPriceAsync,
} from "./database-management.thunks";

const INITIAL_STATE = {
  databaseManagementIsLoading: false,
  addOrderResult: "",
  addOrderError: null,
  deleteUserCartItemsResult: "",
  deleteUserCartItemsError: null,
  humanReadableOrderDetails: "",
  errorIdFromEmail: "",
  dataToUpdateDocument: {},
  deleteDocumentResult: "",
  deleteDocumentError: null,
  updateAttributeResult: "",
  updateAttributeError: null,
  productToEdit: {},
  productToAdd: {},
  createProductResult: "",
  createProductError: null,
  optionsPrices: {},
  getOptionsPricesResult: "",
  getOptionsPricesError: null,
  updateOptionPriceResult: "",
  updateOptionPriceError: "",
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
    setHumanReadableOrderDetails(state, action) {
      state.humanReadableOrderDetails = action.payload;
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
    setProductToAdd(state, action) {
      state.productToAdd = action.payload;
    },
    resetProductToAdd(state) {
      state.productToAdd = {};
    },
    resetCreateProductResult(state) {
      state.createProductResult = "";
    },
    resetCreateProductError(state) {
      state.createProductError = null;
    },
    resetGetOptionsPricesResult(state) {
      state.getOptionsPricesResult = "";
    },
    resetGetOptionsPricesError(state) {
      state.getOptionsPricesError = null;
    },
    resetUpdateOptionPriceResult(state) {
      state.updateOptionPriceResult = "";
    },
    resetUpdateOptionPriceError(state) {
      state.updateOptionPriceError = null;
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
      })
      .addCase(createNewMenuProductAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(createNewMenuProductAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.createProductResult = "fulfilled";
        state.createProductError = null;
      })
      .addCase(createNewMenuProductAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.createProductResult = "rejected";
        state.createProductError = action.payload;
      })
      .addCase(fetchOptionsPricesAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(fetchOptionsPricesAsync.fulfilled, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.optionsPrices = action.payload;
        state.getOptionsPricesResult = "fulfilled";
        state.getOptionsPricesError = null;
      })
      .addCase(fetchOptionsPricesAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.getOptionsPricesResult = "rejected";
        state.optionsPrices = {};
        state.getOptionsPricesError = action.payload;
      })
      .addCase(updateOptionPriceAsync.pending, (state) => {
        state.databaseManagementIsLoading = true;
      })
      .addCase(updateOptionPriceAsync.fulfilled, (state) => {
        state.databaseManagementIsLoading = false;
        state.updateOptionPriceResult = "fulfilled";
        state.updateOptionPriceError = null;
      })
      .addCase(updateOptionPriceAsync.rejected, (state, action) => {
        state.databaseManagementIsLoading = false;
        state.updateOptionPriceResult = "rejected";
        state.updateOptionPriceError = action.payload;
      });
  },
  selectors: {
    selectDatabaseManagementSelectors: createSelector(
      (state) => state.databaseManagementIsLoading,
      (state) => state.addOrderResult,
      (state) => state.addOrderError,
      (state) => state.deleteUserCartItemsResult,
      (state) => state.deleteUserCartItemsError,
      (state) => state.humanReadableOrderDetails,
      (state) => state.errorIdFromEmail,
      (state) => state.dataToUpdateDocument,
      (state) => state.deleteDocumentResult,
      (state) => state.deleteDocumentError,
      (state) => state.productToEdit,
      (state) => state.updateAttributeResult,
      (state) => state.updateAttributeError,
      (state) => state.productToAdd,
      (state) => state.createProductResult,
      (state) => state.createProductError,
      (state) => state.getOptionsPricesResult,
      (state) => state.optionsPrices,
      (state) => state.getOptionsPricesError,
      (state) => state.updateOptionPriceResult,
      (state) => state.updateOptionPriceError,
      (
        databaseManagementIsLoading,
        addOrderResult,
        addOrderError,
        deleteUserCartItemsResult,
        deleteUserCartItemsError,
        humanReadableOrderDetails,
        errorIdFromEmail,
        dataToUpdateDocument,
        deleteDocumentResult,
        deleteDocumentError,
        productToEdit,
        updateAttributeResult,
        updateAttributeError,
        productToAdd,
        createProductResult,
        createProductError,
        getOptionsPricesResult,
        optionsPrices,
        getOptionsPricesError,
        updateOptionPriceResult,
        updateOptionPriceError
      ) => {
        return {
          databaseManagementIsLoading,
          addOrderResult,
          addOrderError,
          deleteUserCartItemsResult,
          deleteUserCartItemsError,
          humanReadableOrderDetails,
          errorIdFromEmail,
          dataToUpdateDocument,
          deleteDocumentResult,
          deleteDocumentError,
          productToEdit,
          updateAttributeResult,
          updateAttributeError,
          productToAdd,
          createProductResult,
          createProductError,
          getOptionsPricesResult,
          optionsPrices,
          getOptionsPricesError,
          updateOptionPriceResult,
          updateOptionPriceError,
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
  setHumanReadableOrderDetails,
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
  setProductToAdd,
  resetProductToAdd,
  resetCreateProductResult,
  resetCreateProductError,
  resetGetOptionsPricesResult,
  resetGetOptionsPricesError,
  resetUpdateOptionPriceResult,
  resetUpdateOptionPriceError,
  resetDatabaseManagementState,
} = databaseManagementSlice.actions;
export const { selectDatabaseManagementSelectors } =
  databaseManagementSlice.selectors;

export const databaseManagementReducer = databaseManagementSlice.reducer;
