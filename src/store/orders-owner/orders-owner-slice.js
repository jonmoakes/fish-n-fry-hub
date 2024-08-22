import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchOrdersOwnerAllOrdersAsync } from "./orders-owner.thunks";

const INITIAL_STATE = {
  ordersOwnerIsLoading: false,
  ordersOwner: [],
  ordersOwnerError: null,
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
    resetOrdersOwnerState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersOwnerAllOrdersAsync.pending, (state) => {
        state.ordersOwnerIsLoading = true;
      })
      .addCase(fetchOrdersOwnerAllOrdersAsync.fulfilled, (state, action) => {
        state.ordersOwnerIsLoading = false;
        state.ordersOwner = action.payload;
        state.ordersOwnerError = null;
      })
      .addCase(fetchOrdersOwnerAllOrdersAsync.rejected, (state, action) => {
        state.ordersOwnerIsLoading = false;
        state.ordersOwner = [];
        state.ordersOwnerError = action.payload;
      });
  },
  selectors: {
    selectOrdersOwnerSelectors: createSelector(
      (state) => state.ordersOwnerIsLoading,
      (state) => state.ordersOwner,
      (state) => state.ordersOwnerError,

      (ordersOwnerIsLoading, ordersOwner, ordersOwnerError) => {
        const formattedOrdersOwner = ordersOwner.map((order) => {
          return {
            ...order,
            createdAtAsDateObjectForSorting: new Date(order.createdAt),
          };
        });

        const sortedOrdersOwner = formattedOrdersOwner.sort(
          (orderA, orderB) => {
            const dateA = new Date(orderA.dateAsDateObjectForSorting);
            const dateB = new Date(orderB.dateAsDateObjectForSorting);

            return dateA - dateB;
          }
        );

        return {
          ordersOwnerIsLoading,
          ordersOwner,
          ordersOwnerError,
          sortedOrdersOwner,
        };
      }
    ),
  },
});

export const { setOrdersOwner, resetOrdersOwnerError, resetOrdersOwnerState } =
  ordersOwnerSlice.actions;
export const { selectOrdersOwnerSelectors } = ordersOwnerSlice.selectors;

export const ordersOwnerReducer = ordersOwnerSlice.reducer;
