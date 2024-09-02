import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addCartItemToDatabaseAsync,
  fetchUserCartItemsAsync,
  updateCartItemQuantityAsync,
  removeCartItemAsync,
} from "./cart.thunks";

const INITIAL_STATE = {
  cartItemsIsLoading: false,
  cartItems: [],
  fetchCartItemsResult: "",
  fetchCartItemsError: null,
  addCartItemResult: "",
  addCartItemsError: null,
  removeCartItemResult: "",
  removeCartItemError: null,
  updateCartItemQuantityResult: "",
  updateCartItemQuantityError: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    resetFetchCartItemsResult(state) {
      state.fetchCartItemsResult = "";
    },
    resetFetchCartItemsError(state) {
      state.fetchCartItemsError = null;
    },
    resetAddCartItemResult(state) {
      state.addCartItemResult = "";
    },
    resetAddCartItemsError(state) {
      state.addCartItemsError = null;
    },
    resetRemoveCartItemResult(state) {
      state.removeCartItemResult = "";
    },
    resetRemoveCartItemError(state) {
      state.removeCartItemError = null;
    },
    resetUpdateCartItemQuantityResult(state) {
      state.updateCartItemQuantityResult = "";
    },
    resetUpdateCartItemQuantityError(state) {
      state.updateCartItemQuantityError = null;
    },
    resetCartState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCartItemsAsync.pending, (state) => {
        state.cartItemsIsLoading = true;
      })
      .addCase(fetchUserCartItemsAsync.fulfilled, (state, action) => {
        state.cartItemsIsLoading = false;
        state.cartItems = action.payload;
        state.fetchCartItemsError = null;
      })
      .addCase(fetchUserCartItemsAsync.rejected, (state, action) => {
        state.cartItemsIsLoading = false;
        state.cartItems = null;
        state.fetchCartItemsError = action.payload;
      })
      .addCase(addCartItemToDatabaseAsync.pending, (state) => {
        state.cartItemsIsLoading = true;
      })
      .addCase(addCartItemToDatabaseAsync.fulfilled, (state) => {
        state.cartItemsIsLoading = false;
        state.addCartItemResult = "fulfilled";
        state.addCartItemsError = null;
      })
      .addCase(addCartItemToDatabaseAsync.rejected, (state, action) => {
        state.cartItemsIsLoading = false;
        state.addCartItemResult = "rejected";
        state.addCartItemsError = action.payload;
      })
      .addCase(removeCartItemAsync.pending, (state) => {
        state.cartItemsIsLoading = true;
      })
      .addCase(removeCartItemAsync.fulfilled, (state) => {
        state.cartItemsIsLoading = false;
        state.removeCartItemResult = "fulfilled";
        state.removeCartItemError = null;
      })
      .addCase(removeCartItemAsync.rejected, (state, action) => {
        state.cartItemsIsLoading = false;
        state.removeCartItemResult = "rejected";
        state.removeCartItemError = action.payload;
      })
      .addCase(updateCartItemQuantityAsync.pending, (state) => {
        state.cartItemsIsLoading = true;
      })
      .addCase(updateCartItemQuantityAsync.fulfilled, (state) => {
        state.cartItemsIsLoading = false;
        state.updateCartItemQuantityResult = "fulfilled";
        state.updateCartItemQuantityError = null;
      })
      .addCase(updateCartItemQuantityAsync.rejected, (state, action) => {
        state.cartItemsIsLoading = false;
        state.updateCartItemQuantityResult = "rejected";
        state.updateCartItemQuantityError = action.payload;
      });
  },
  selectors: {
    selectCartSelectors: createSelector(
      (state) => state.cartItemsIsLoading,
      (state) => state.cartItems,
      (state) => state.fetchCartItemsResult,
      (state) => state.fetchCartItemsError,
      (state) => state.addCartItemResult,
      (state) => state.addCartItemsError,
      (state) => state.removeCartItemResult,
      (state) => state.removeCartItemError,
      (state) => state.updateCartItemQuantityResult,
      (state) => state.updateCartItemQuantityError,
      (
        cartItemsIsLoading,
        cartItems,
        fetchCartItemsResult,
        fetchCartItemsError,
        addCartItemResult,
        addCartItemsError,
        removeCartItemResult,
        removeCartItemError,
        updateCartItemQuantityResult,
        updateCartItemQuantityError
      ) => {
        const grandTotal = cartItems
          ? cartItems.reduce((accumulator, item) => {
              const cartItemObject = JSON.parse(item.cartItem);
              return accumulator + cartItemObject.priceWithOptionsAndQuantity;
            }, 0)
          : 0;

        return {
          cartItemsIsLoading,
          cartItems,
          fetchCartItemsResult,
          fetchCartItemsError,
          addCartItemResult,
          addCartItemsError,
          removeCartItemResult,
          removeCartItemError,
          updateCartItemQuantityResult,
          updateCartItemQuantityError,
          grandTotal,
        };
      }
    ),
  },
});

export const {
  setCartItems,
  resetFetchCartItemsResult,
  resetFetchCartItemsError,
  resetAddCartItemResult,
  resetAddCartItemsError,
  resetRemoveCartItemResult,
  resetRemoveCartItemError,
  resetUpdateCartItemQuantityResult,
  resetUpdateCartItemQuantityError,
  resetCartState,
} = cartSlice.actions;
export const { selectCartSelectors } = cartSlice.selectors;

export const cartReducer = cartSlice.reducer;
