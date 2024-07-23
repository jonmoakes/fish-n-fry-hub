import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categoryItems: [],
  selectedItem: {},
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
    resetSelectedItem(state) {
      state.selectedItem = {};
    },
    resetChooseOptionsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectChooseOptionsSelectors: createSelector(
      (state) => state.selectedItem,
      (state) => state.categoryItems,
      (selectedItem, categoryItems) => {
        return {
          selectedItem,
          categoryItems,
        };
      }
    ),
  },
});

export const {
  setMenuItemsForChosenCategory,
  resetMenuItemsForChosenCategory,
  setSelectedItem,
  resetSelectedItem,
  resetChooseOptionsState,
} = chooseOptionsSlice.actions;
export const { selectChooseOptionsSelectors } = chooseOptionsSlice.selectors;

export const chooseOptionsReducer = chooseOptionsSlice.reducer;
