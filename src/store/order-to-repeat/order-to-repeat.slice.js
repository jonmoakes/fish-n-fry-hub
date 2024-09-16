import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchOrderToRepeatAsync,
  addRepeatOrderToDatabaseAsync,
} from "./order-to-repeat.thunks";

const INITIAL_STATE = {
  orderToRepeatIsLoading: false,
  idOfOrderToRepeat: "",
  orderToRepeatDetails: null,
  orderToRepeatResult: null,
  orderToRepeatError: null,
};

export const orderToRepeatSlice = createSlice({
  name: "orderToRepeat",
  initialState: INITIAL_STATE,
  reducers: {
    setIdOfOrderToRepeat(state, action) {
      state.idOfOrderToRepeat = action.payload;
    },
    resetOrderToRepeatResult(state) {
      state.orderToRepeatResult = "";
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
      })
      .addCase(addRepeatOrderToDatabaseAsync.pending, (state) => {
        state.orderToRepeatIsLoading = true;
      })
      .addCase(addRepeatOrderToDatabaseAsync.fulfilled, (state, action) => {
        state.orderToRepeatIsLoading = false;
        state.orderToRepeatResult = "fulfilled";
        state.orderToRepeatError = null;
      })
      .addCase(addRepeatOrderToDatabaseAsync.rejected, (state, action) => {
        state.orderToRepeatIsLoading = false;
        state.orderToRepeatResult = "rejected";
        state.orderToRepeatError = action.payload;
      });
  },
  selectors: {
    selectOrderToRepeatSelectors: createSelector(
      (state) => state.orderToRepeatIsLoading,
      (state) => state.idOfOrderToRepeat,
      (state) => state.orderToRepeatDetails,
      (state) => state.orderToRepeatResult,
      (state) => state.orderToRepeatError,
      (state) => state.INITIAL_STATE,
      (
        orderToRepeatIsLoading,
        idOfOrderToRepeat,
        orderToRepeatDetails,
        orderToRepeatResult,
        orderToRepeatError,
        INITIAL_STATE
      ) => {
        return {
          orderToRepeatIsLoading,
          idOfOrderToRepeat,
          orderToRepeatDetails,
          orderToRepeatResult,
          orderToRepeatError,
          INITIAL_STATE,
        };
      }
    ),
  },
});

export const {
  setIdOfOrderToRepeat,
  resetOrderToRepeatResult,
  resetOrderToRepeatError,
  resetOrderToRepeatState,
} = orderToRepeatSlice.actions;
export const { selectOrderToRepeatSelectors } = orderToRepeatSlice.selectors;

export const orderToRepeatReducer = orderToRepeatSlice.reducer;
