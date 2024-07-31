import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchGratedCheesePriceAsync,
  fetchDonerMeatPriceAsync,
  fetchSaucesDocumentsAsync,
  fetchCansDocumentsAsync,
} from "./choose-options-thunks";

const INITIAL_STATE = {
  categoryItems: [],
  selectedItem: {},
  optionsPricesIsLoading: false,
  gratedCheesePrice: null,
  gratedCheesePriceError: null,
  donerMeatPrice: null,
  donerMeatPriceError: null,
  canDocuments: [],
  canDocumentsError: null,
  saucesDocuments: [],
  saucesDocumentsError: null,
};

export const chooseOptionsSlice = createSlice({
  name: "chooseOptions",
  initialState: INITIAL_STATE,
  reducers: {
    setMenuItemsForChosenCategory(state, action) {
      state.categoryItems = action.payload;
    },
    resetMenuItemsForChosenCategory(state) {
      state.categoryItems = [];
    },
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
    updateSelectedItem(state, action) {
      state.selectedItem = {
        ...state.selectedItem,
        ...action.payload,
      };
    },
    resetSelectedItem(state) {
      state.selectedItem = {};
    },
    resetChooseOptionsFetchErrors(state) {
      state.gratedCheesePriceError = null;
      state.donerMeatPriceError = null;
      state.saucesDocumentsError = null;
      state.canDocumentsError = null;
    },
    resetChooseOptionsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGratedCheesePriceAsync.pending, (state) => {
        state.optionsPricesIsLoading = true;
      })
      .addCase(fetchGratedCheesePriceAsync.fulfilled, (state, action) => {
        state.optionsPricesIsLoading = false;
        state.gratedCheesePrice = action.payload;
        state.gratedCheesePriceError = null;
      })
      .addCase(fetchGratedCheesePriceAsync.rejected, (state, action) => {
        state.optionsPricesIsLoading = false;
        state.gratedCheesePrice = null;
        state.gratedCheesePriceError = action.payload;
      })
      .addCase(fetchDonerMeatPriceAsync.pending, (state) => {
        state.optionsPricesIsLoading = true;
      })
      .addCase(fetchDonerMeatPriceAsync.fulfilled, (state, action) => {
        state.optionsPricesIsLoading = false;
        state.donerMeatPrice = action.payload;
        state.donerMeatPriceError = null;
      })
      .addCase(fetchDonerMeatPriceAsync.rejected, (state, action) => {
        state.optionsPricesIsLoading = false;
        state.donerMeatPrice = null;
        state.donerMeatPriceError = action.payload;
      })
      .addCase(fetchCansDocumentsAsync.pending, (state) => {
        state.menuIsLoading = true;
      })
      .addCase(fetchCansDocumentsAsync.fulfilled, (state, action) => {
        state.menuIsLoading = false;
        state.canDocuments = action.payload;
        state.canDocumentsError = null;
      })
      .addCase(fetchCansDocumentsAsync.rejected, (state, action) => {
        state.menuIsLoading = false;
        state.canDocuments = [];
        state.canDocumentsError = action.payload;
      })
      .addCase(fetchSaucesDocumentsAsync.pending, (state) => {
        state.menuIsLoading = true;
      })
      .addCase(fetchSaucesDocumentsAsync.fulfilled, (state, action) => {
        state.menuIsLoading = false;
        state.saucesDocuments = action.payload;
        state.saucesDocumentsError = null;
      })
      .addCase(fetchSaucesDocumentsAsync.rejected, (state, action) => {
        state.menuIsLoading = false;
        state.saucesDocuments = [];
        state.saucesDocumentsError = action.payload;
      });
  },
  selectors: {
    selectChooseOptionsSelectors: createSelector(
      (state) => state.selectedItem,
      (state) => state.categoryItems,
      (state) => state.optionsPricesIsLoading,
      (state) => state.gratedCheesePrice,
      (state) => state.gratedCheesePriceError,
      (state) => state.donerMeatPrice,
      (state) => state.donerMeatPriceError,
      (state) => state.canDocuments,
      (state) => state.canDocumentsError,
      (state) => state.saucesDocuments,
      (state) => state.saucesDocumentsError,
      (
        selectedItem,
        categoryItems,
        optionsPricesIsLoading,
        gratedCheesePrice,
        gratedCheesePriceError,
        donerMeatPrice,
        donerMeatPriceError,
        canDocuments,
        canDocumentsError,
        saucesDocuments,
        saucesDocumentsError
      ) => {
        return {
          selectedItem,
          categoryItems,
          optionsPricesIsLoading,
          gratedCheesePrice,
          gratedCheesePriceError,
          donerMeatPrice,
          donerMeatPriceError,
          canDocuments,
          canDocumentsError,
          saucesDocuments,
          saucesDocumentsError,
        };
      }
    ),
  },
});

export const {
  setMenuItemsForChosenCategory,
  resetMenuItemsForChosenCategory,
  setSelectedItem,
  updateSelectedItem,
  resetSelectedItem,
  resetChooseOptionsFetchErrors,
  resetChooseOptionsState,
} = chooseOptionsSlice.actions;
export const { selectChooseOptionsSelectors } = chooseOptionsSlice.selectors;

export const chooseOptionsReducer = chooseOptionsSlice.reducer;
