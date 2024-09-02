import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  shouldShowElement: false,
  shouldShowSecondElement: false,
  shouldShowThirdElement: false,
};

export const shouldShowElementSlice = createSlice({
  name: "shouldShowElement",
  initialState: INITIAL_STATE,
  reducers: {
    hideElement(state) {
      state.shouldShowElement = false;
    },
    toggleShowElement(state) {
      state.shouldShowElement = !state.shouldShowElement;
    },
    hideSecondElement(state) {
      state.shouldShowSecondElement = false;
    },
    toggleShowSecondElement(state) {
      state.shouldShowSecondElement = !state.shouldShowSecondElement;
    },
    hideThirdElement(state) {
      state.shouldShowThirdElement = false;
    },
    toggleShowThirdElement(state) {
      state.shouldShowThirdElement = !state.shouldShowThirdElement;
    },
    resetShouldShowElementState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectShouldShowElementSelectors: createSelector(
      (state) => state.shouldShowElement,
      (state) => state.shouldShowSecondElement,
      (state) => state.shouldShowThirdElement,
      (shouldShowElement, shouldShowSecondElement, shouldShowThirdElement) => {
        return {
          shouldShowElement,
          shouldShowSecondElement,
          shouldShowThirdElement,
        };
      }
    ),
  },
});

export const {
  hideElement,
  toggleShowElement,
  hideSecondElement,
  toggleShowSecondElement,
  hideThirdElement,
  toggleShowThirdElement,
  resetShouldShowElementState,
} = shouldShowElementSlice.actions;
export const { selectShouldShowElementSelectors } =
  shouldShowElementSlice.selectors;

export const shouldShowElementReducer = shouldShowElementSlice.reducer;
