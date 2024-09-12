import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchOrdersCustomerAsync } from "./orders-customer.thunks";

const INITIAL_STATE = {
  ordersCustomerIsLoading: false,
  ordersCustomer: [],
  ordersCustomerError: null,
};

export const ordersCustomerSlice = createSlice({
  name: "ordersCustomer",
  initialState: INITIAL_STATE,
  reducers: {
    resetOrdersCustomerError(state) {
      state.ordersOwnerError = null;
    },
    resetOrdersCustomerState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersCustomerAsync.pending, (state) => {
        state.ordersCustomerIsLoading = true;
      })
      .addCase(fetchOrdersCustomerAsync.fulfilled, (state, action) => {
        state.ordersCustomerIsLoading = false;
        state.ordersCustomer = action.payload;
        state.ordersCustomerError = null;
      })
      .addCase(fetchOrdersCustomerAsync.rejected, (state, action) => {
        state.ordersCustomerIsLoading = false;
        state.ordersCustomer = [];
        state.ordersCustomerError = action.payload;
      });
  },
  selectors: {
    selectOrdersCustomerSelectors: createSelector(
      (state) => state.ordersCustomerIsLoading,
      (state) => state.ordersCustomer,
      (state) => state.ordersCustomerError,
      (ordersCustomerIsLoading, ordersCustomer, ordersCustomerError) => {
        const formattedOrdersCustomer = ordersCustomer.map((order) => {
          return {
            ...order,
            createdAtAsDateObjectForSearching: new Date(order.createdAt),
          };
        });

        return {
          ordersCustomerIsLoading,
          ordersCustomer,
          ordersCustomerError,
          formattedOrdersCustomer,
        };
      }
    ),
  },
});

export const { resetOrdersCustomerError, resetOrdersCustomerState } =
  ordersCustomerSlice.actions;
export const { selectOrdersCustomerSelectors } = ordersCustomerSlice.selectors;

export const ordersCustomerReducer = ordersCustomerSlice.reducer;
