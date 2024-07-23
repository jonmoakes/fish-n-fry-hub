import { createSelector, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  selectedItem: {},
};

export const chooseOptionsSlice = createSlice({
  name: "chooseOptions",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
    resetChooseOptionsState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectChooseOptionsSelectors: createSelector(
      (state) => state.selectedItem,
      (selectedItem) => {
        return {
          selectedItem,
        };
      }
    ),
  },
});

export const { setSelectedItem, resetChooseOptionsState } =
  chooseOptionsSlice.actions;
export const { selectChooseOptionsSelectors } = chooseOptionsSlice.selectors;

export const chooseOptionsReducer = chooseOptionsSlice.reducer;
