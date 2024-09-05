import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchGratedCheesePriceAsync,
  fetchDonerMeatPriceAsync,
  fetchSaucesDocumentsAsync,
  fetchCansDocumentsAsync,
  fetchMeatsDocumentsAsync,
  fetchPiesDocumentsAsync,
  fetchCondimentsDocumentsAsync,
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
  meatsDocuments: [],
  meatsDocumentsError: null,
  piesDocuments: [],
  piesDocumentsError: null,
  condimentsDocuments: [],
  condimentsDocumentsError: null,
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
      state.meatsDocumentsError = null;
      state.piesDocumentsError = null;
      state.condimentsDocumentsError = null;
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
      })
      .addCase(fetchMeatsDocumentsAsync.pending, (state) => {
        state.menuIsLoading = true;
      })
      .addCase(fetchMeatsDocumentsAsync.fulfilled, (state, action) => {
        state.menuIsLoading = false;
        state.meatsDocuments = action.payload;
        state.meatsDocumentsError = null;
      })
      .addCase(fetchMeatsDocumentsAsync.rejected, (state, action) => {
        state.menuIsLoading = false;
        state.meatsDocuments = [];
        state.meatsDocumentsError = action.payload;
      })
      .addCase(fetchPiesDocumentsAsync.pending, (state) => {
        state.menuIsLoading = true;
      })
      .addCase(fetchPiesDocumentsAsync.fulfilled, (state, action) => {
        state.menuIsLoading = false;
        state.piesDocuments = action.payload;
        state.piesDocumentsError = null;
      })
      .addCase(fetchPiesDocumentsAsync.rejected, (state, action) => {
        state.menuIsLoading = false;
        state.piesDocuments = [];
        state.piesDocumentsError = action.payload;
      })
      .addCase(fetchCondimentsDocumentsAsync.pending, (state) => {
        state.menuIsLoading = true;
      })
      .addCase(fetchCondimentsDocumentsAsync.fulfilled, (state, action) => {
        state.menuIsLoading = false;
        state.condimentsDocuments = action.payload;
        state.condimentsDocumentsError = null;
      })
      .addCase(fetchCondimentsDocumentsAsync.rejected, (state, action) => {
        state.menuIsLoading = false;
        state.condimentsDocuments = [];
        state.condimentsDocumentsError = action.payload;
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
      (state) => state.meatsDocuments,
      (state) => state.meatsDocumentsError,
      (state) => state.piesDocuments,
      (state) => state.piesDocumentsError,
      (state) => state.condimentsDocuments,
      (state) => state.condimentsDocumentsError,
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
        saucesDocumentsError,
        meatsDocuments,
        meatsDocumentsError,
        piesDocuments,
        piesDocumentsError,
        condimentsDocuments,
        condimentsDocumentsError
      ) => {
        const sortedCategoryItems = [...categoryItems].sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        return {
          selectedItem,
          categoryItems,
          sortedCategoryItems,
          optionsPricesIsLoading,
          gratedCheesePrice,
          gratedCheesePriceError,
          donerMeatPrice,
          donerMeatPriceError,
          canDocuments,
          canDocumentsError,
          saucesDocuments,
          saucesDocumentsError,
          meatsDocuments,
          meatsDocumentsError,
          piesDocuments,
          piesDocumentsError,
          condimentsDocuments,
          condimentsDocumentsError,
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
