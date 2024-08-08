import { createSelector, createSlice } from "@reduxjs/toolkit";

const defaultCardPaymentResult = {
  error: "",
  warning: "",
  showPrePayButton: false,
};
const initialState = {
  cardInputResult: defaultCardPaymentResult,
};

const cardInputResultSlice = createSlice({
  name: "cardInputResult",
  initialState,
  reducers: {
    setCardInputResult(state, action) {
      state.cardInputResult = action.payload;
    },
    resetCardInputResultState: () => {
      return initialState;
    },
  },
  selectors: {
    selectCardInputResultSelectors: createSelector(
      (state) => state.cardInputResult,
      (cardInputResult) => {
        return {
          cardInputResult,
        };
      }
    ),
  },
});

export const { setCardInputResult, resetCardInputResultState } =
  cardInputResultSlice.actions;
export const { selectCardInputResultSelectors } =
  cardInputResultSlice.selectors;

export const cardInputResultReducer = cardInputResultSlice.reducer;
