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
  addCartItemResult: "",
  cartItemsError: null,
  updateCartItemQuantityResult: "",
  updateCartItemQuantityError: null,
  removeCartItemResult: "",
  removeCartItemError: null,
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
    resetUpdateCartItemQuantityResult(state) {
      state.updateCartItemQuantityResult = "";
    },
    resetUpdateCartItemQuantityError(state) {
      state.updateCartItemQuantityError = null;
    },
    resetRemoveCartItemResult(state) {
      state.removeCartItemResult = "";
    },
    resetRemoveCartItemError(state) {
      state.removeCartItemError = null;
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
      });
  },
  selectors: {
    selectCartSelectors: createSelector(
      (state) => state.cartItemsIsLoading,
      (state) => state.cartItems,
      (state) => state.addCartItemResult,
      (state) => state.cartItemsError,
      (state) => state.updateCartItemQuantityResult,
      (state) => state.updateCartItemQuantityError,
      (state) => state.removeCartItemResult,
      (state) => state.removeCartItemError,

      (
        cartItemsIsLoading,
        cartItems,
        addCartItemResult,
        cartItemsError,
        updateCartItemQuantityResult,
        updateCartItemQuantityError,
        removeCartItemResult,
        removeCartItemError
      ) => {
        const grandTotal = cartItems.reduce((accumulator, item) => {
          const cartItemObject = JSON.parse(item.cartItem);
          return accumulator + cartItemObject.priceWithOptionsAndQuantity;
        }, 0);

        return {
          cartItemsIsLoading,
          cartItems,
          addCartItemResult,
          cartItemsError,
          updateCartItemQuantityResult,
          updateCartItemQuantityError,
          removeCartItemResult,
          removeCartItemError,
          grandTotal,
        };
      }
    ),
  },
});

export const {
  setCartItems,
  resetAddCartItemResult,
  resetUpdateCartItemQuantityResult,
  resetUpdateCartItemQuantityError,
  resetRemoveCartItemResult,
  resetRemoveCartItemError,
  resetCartItemsError,
  resetCartState,
} = cartSlice.actions;
export const { selectCartSelectors } = cartSlice.selectors;

export const cartReducer = cartSlice.reducer;
