import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchOrdersOwnerFromCurrentDayAsync,
  fetchOrdersOwnerAllTimeOrdersAsync,
  updateOrderStatusAsync,
} from "./orders-owner.thunks";

const INITIAL_STATE = {
  ordersOwnerIsLoading: false,
  ordersOwner: [],
  ordersOwnerError: null,
  updateOrderStatusResult: "",
  updateOrderStatusError: null,
};

export const ordersOwnerSlice = createSlice({
  name: "ordersOwner",
  initialState: INITIAL_STATE,
  reducers: {
    setOrdersOwner(state, action) {
      state.ordersOwner = action.payload;
    },
    resetOrdersOwnerError(state) {
      state.ordersOwnerError = null;
    },
    resetUpdateOrderStatusResult(state) {
      state.updateOrderStatusResult = "";
    },
    resetUpdateOrderStatusError(state) {
      state.updateOrderStatusError = null;
    },
    resetOrdersOwnerState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersOwnerFromCurrentDayAsync.pending, (state) => {
        state.ordersOwnerIsLoading = true;
      })
      .addCase(
        fetchOrdersOwnerFromCurrentDayAsync.fulfilled,
        (state, action) => {
          state.ordersOwnerIsLoading = false;
          state.ordersOwner = action.payload;
          state.ordersOwnerError = null;
        }
      )
      .addCase(
        fetchOrdersOwnerFromCurrentDayAsync.rejected,
        (state, action) => {
          state.ordersOwnerIsLoading = false;
          state.ordersOwner = [];
          state.ordersOwnerError = action.payload;
        }
      )
      .addCase(fetchOrdersOwnerAllTimeOrdersAsync.pending, (state) => {
        state.ordersOwnerIsLoading = true;
      })
      .addCase(
        fetchOrdersOwnerAllTimeOrdersAsync.fulfilled,
        (state, action) => {
          state.ordersOwnerIsLoading = false;
          state.ordersOwner = action.payload;
          state.ordersOwnerError = null;
        }
      )
      .addCase(fetchOrdersOwnerAllTimeOrdersAsync.rejected, (state, action) => {
        state.ordersOwnerIsLoading = false;
        state.ordersOwner = [];
        state.ordersOwnerError = action.payload;
      })
      .addCase(updateOrderStatusAsync.pending, (state) => {
        state.ordersOwnerIsLoading = true;
      })
      .addCase(updateOrderStatusAsync.fulfilled, (state) => {
        state.ordersOwnerIsLoading = false;
        state.updateOrderStatusResult = "fulfilled";
        state.updateOrderStatusError = null;
      })
      .addCase(updateOrderStatusAsync.rejected, (state, action) => {
        state.ordersOwnerIsLoading = false;
        state.updateOrderStatusResult = "rejected";
        state.updateOrderStatusError = action.payload;
      });
  },
  selectors: {
    selectOrdersOwnerSelectors: createSelector(
      (state) => state.ordersOwnerIsLoading,
      (state) => state.ordersOwner,
      (state) => state.ordersOwnerError,
      (state) => state.updateOrderStatusResult,
      (state) => state.updateOrderStatusError,
      (
        ordersOwnerIsLoading,
        ordersOwner,
        ordersOwnerError,
        updateOrderStatusResult,
        updateOrderStatusError
      ) => {
        const formattedOrdersOwner = ordersOwner.map((order) => {
          return {
            ...order,
            createdAtAsDateObjectForSearching: new Date(order.createdAt),
          };
        });

        return {
          ordersOwnerIsLoading,
          ordersOwner,
          ordersOwnerError,
          formattedOrdersOwner,
          updateOrderStatusResult,
          updateOrderStatusError,
        };
      }
    ),
  },
});

export const {
  setOrdersOwner,
  resetOrdersOwnerError,
  resetUpdateOrderStatusResult,
  resetUpdateOrderStatusError,
  resetOrdersOwnerState,
} = ordersOwnerSlice.actions;
export const { selectOrdersOwnerSelectors } = ordersOwnerSlice.selectors;

export const ordersOwnerReducer = ordersOwnerSlice.reducer;
