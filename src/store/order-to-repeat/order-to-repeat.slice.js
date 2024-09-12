import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchOrderToRepeatAsync } from "./order-to-repeat.thunks";

const INITIAL_STATE = {
  orderToRepeatIsLoading: false,
  idOfOrderToRepeat: "",
  orderToRepeatDetails: null,
  orderToRepeatError: null,
};

export const orderToRepeatSlice = createSlice({
  name: "orderToRepeat",
  initialState: INITIAL_STATE,
  reducers: {
    setIdOfOrderToRepeat(state, action) {
      state.idOfOrderToRepeat = action.payload;
    },
    resetOrderToRepeatError(state) {
      state.orderToRepeatError = null;
    },
    resetOrderToRepeatState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderToRepeatAsync.pending, (state) => {
        state.orderToRepeatIsLoading = true;
      })
      .addCase(fetchOrderToRepeatAsync.fulfilled, (state, action) => {
        state.orderToRepeatIsLoading = false;
        state.orderToRepeatDetails = action.payload;
        state.orderToRepeatError = null;
      })
      .addCase(fetchOrderToRepeatAsync.rejected, (state, action) => {
        state.orderToRepeatIsLoading = false;
        state.orderToRepeatDetails = null;
        state.orderToRepeatError = action.payload;
      });
  },
  selectors: {
    selectOrderToRepeatSelectors: createSelector(
      (state) => state.orderToRepeatIsLoading,
      (state) => state.idOfOrderToRepeat,
      (state) => state.orderToRepeatDetails,
      (state) => state.orderToRepeatError,
      (
        orderToRepeatIsLoading,
        idOfOrderToRepeat,
        orderToRepeatDetails,
        orderToRepeatError
      ) => {
        return {
          orderToRepeatIsLoading,
          idOfOrderToRepeat,
          orderToRepeatDetails,
          orderToRepeatError,
        };
      }
    ),
  },
});

export const {
  setIdOfOrderToRepeat,
  resetOrderToRepeatError,
  resetOrderToRepeatState,
} = orderToRepeatSlice.actions;
export const { selectOrderToRepeatSelectors } = orderToRepeatSlice.selectors;

export const orderToRepeatReducer = orderToRepeatSlice.reducer;
