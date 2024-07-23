import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchMenuDocumentsAsync } from "./menu-thunks";

const INITIAL_STATE = {
  menuIsLoading: false,
  menuDocuments: [],
  menuError: null,
  chosenCategory: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: INITIAL_STATE,
  reducers: {
    setChosenCategory(state, action) {
      state.chosenCategory = action.payload;
    },
    resetMenuError(state) {
      state.menuError = null;
    },
    resetMenuState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuDocumentsAsync.pending, (state) => {
        state.menuIsLoading = true;
      })
      .addCase(fetchMenuDocumentsAsync.fulfilled, (state, action) => {
        state.menuIsLoading = false;
        state.menuDocuments = action.payload;
        state.menuError = null;
      })
      .addCase(fetchMenuDocumentsAsync.rejected, (state, action) => {
        state.menuIsLoading = false;
        state.menuDocuments = [];
        state.menuError = action.payload;
      });
  },
  selectors: {
    selectMenuSelectors: createSelector(
      (state) => state.menuIsLoading,
      (state) => state.menuDocuments,
      (state) => state.menuError,
      (state) => state.chosenCategory,
      (menuIsLoading, menuDocuments, menuError, chosenCategory) => {
        return {
          menuIsLoading,
          menuDocuments,
          menuError,
          chosenCategory,
        };
      }
    ),
  },
});

export const { setChosenCategory, resetMenuError, resetMenuState } =
  menuSlice.actions;
export const { selectMenuSelectors } = menuSlice.selectors;

export const menuReducer = menuSlice.reducer;
