import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchOptionsPricesDocumentsAsync } from "./choose-options-thunks";

const INITIAL_STATE = {
  categoryItems: [],
  selectedItem: {},
  optionsPricesIsLoading: false,
  optionsPrices: {},
  optionsPricesError: null,
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
    resetOptionsPricesError(state) {
      state.optionsPricesError = null;
    },
    resetChooseOptionsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOptionsPricesDocumentsAsync.pending, (state) => {
        state.optionsPricesIsLoading = true;
      })
      .addCase(fetchOptionsPricesDocumentsAsync.fulfilled, (state, action) => {
        state.optionsPricesIsLoading = false;
        state.optionsPrices = action.payload;
        state.optionsPricesError = null;
      })
      .addCase(fetchOptionsPricesDocumentsAsync.rejected, (state, action) => {
        state.optionsPricesIsLoading = false;
        state.optionsPrices = {};
        state.optionsPricesError = action.payload;
      });
  },
  selectors: {
    selectChooseOptionsSelectors: createSelector(
      (state) => state.selectedItem,
      (state) => state.categoryItems,
      (state) => state.optionsPricesIsLoading,
      (state) => state.optionsPrices,
      (state) => state.optionsPricesError,
      (
        selectedItem,
        categoryItems,
        optionsPricesIsLoading,
        optionsPrices,
        optionsPricesError
      ) => {
        return {
          selectedItem,
          categoryItems,
          optionsPricesIsLoading,
          optionsPrices,
          optionsPricesError,
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
  resetOptionsPricesError,
  resetChooseOptionsState,
  setPricesOfOptionsSelected,
} = chooseOptionsSlice.actions;
export const { selectChooseOptionsSelectors } = chooseOptionsSlice.selectors;

export const chooseOptionsReducer = chooseOptionsSlice.reducer;
