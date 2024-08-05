import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addCartItemToDatabaseAsync,
  fetchUserCartItemsAsync,
} from "./cart.thunks";

const INITIAL_STATE = {
  cartItemsIsLoading: false,
  cartItems: [],
  addCartItemResult: "",
  cartItemsError: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    resetAddCartItemResult(state) {
      state.addCartItemResult = "";
    },
    resetCartItemsError(state) {
      state.cartItemsError = null;
    },
    resetCartState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCartItemToDatabaseAsync.pending, (state) => {
        state.cartItemsIsLoading = true;
      })
      .addCase(addCartItemToDatabaseAsync.fulfilled, (state) => {
        state.cartItemsIsLoading = false;
        state.addCartItemResult = "fulfilled";
        state.cartItemsError = null;
      })
      .addCase(addCartItemToDatabaseAsync.rejected, (state, action) => {
        state.cartItemsIsLoading = false;
        state.addCartItemResult = "rejected";
        state.cartItemsError = action.payload;
      })
      .addCase(fetchUserCartItemsAsync.pending, (state) => {
        state.cartItemsIsLoading = true;
      })
      .addCase(fetchUserCartItemsAsync.fulfilled, (state, action) => {
        state.cartItemsIsLoading = false;
        state.cartItems = action.payload;
        state.cartItemsError = null;
      })
      .addCase(fetchUserCartItemsAsync.rejected, (state, action) => {
        state.cartItemsIsLoading = false;
        state.cartItems = null;
        state.cartItemsError = action.payload;
      });
  },
  selectors: {
    selectCartSelectors: createSelector(
      (state) => state.cartItemsIsLoading,
      (state) => state.cartItems,
      (state) => state.addCartItemResult,
      (state) => state.cartItemsError,
      (cartItemsIsLoading, cartItems, addCartItemResult, cartItemsError) => {
        return {
          cartItemsIsLoading,
          cartItems,
          addCartItemResult,
          cartItemsError,
        };
      }
    ),
  },
});

export const {
  setCartItems,
  resetAddCartItemResult,
  resetCartItemsError,
  resetCartState,
} = cartSlice.actions;
export const { selectCartSelectors } = cartSlice.selectors;

export const cartReducer = cartSlice.reducer;
