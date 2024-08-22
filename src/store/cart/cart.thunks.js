import { createAsyncThunk } from "@reduxjs/toolkit";
import { databaseId, cartItemsCollectionId } from "../../constants/constants";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { ID } from "appwrite";

import { removeCartItem } from "./cart-actions";

export const fetchUserCartItemsAsync = createAsyncThunk(
  "fetchUserCartItems",
  async ({ id }, thunkAPI) => {
    try {
      const queryIndex = "userId";
      const queryValue = id;

      const usersCartItems = await listDocumentsByQueryOrSearch(
        databaseId,
        cartItemsCollectionId,
        queryIndex,
        queryValue,
        false,
        null
      );

      const { documents } = usersCartItems;

      if (!documents.length) {
        return [];
      }

      const processedCartItems = documents.map(
        ({
          $collectionId,
          $databaseId,
          $permissions,
          $tenant,
          $updatedAt,
          $createdAt,
          userId,
          ...rest
        }) => rest
      );

      // Return the array of processed objects
      return processedCartItems;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCartItemToDatabaseAsync = createAsyncThunk(
  "addCartItemToDatabase",
  async ({ id, cartItem }, thunkAPI) => {
    try {
      const cartItemToAdd = {
        userId: id,
        cartItem,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        cartItemsCollectionId,
        ID.unique(),
        cartItemToAdd
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeCartItemAsync = createAsyncThunk(
  "removeCartItem",
  async ({ $id }, thunkAPI) => {
    try {
      removeCartItem($id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCartItemQuantityAsync = createAsyncThunk(
  "updateCartItemQuantity",
  async ({ $id, operation }, thunkAPI) => {
    try {
      const getUsersDocument = await manageDatabaseDocument(
        "get",
        databaseId,
        cartItemsCollectionId,
        $id
      );

      const { cartItem } = getUsersDocument;
      const cartItemObject = JSON.parse(cartItem);
      const { quantity, priceWithOptionsAndQuantity } = cartItemObject ?? {};

      let quantityAsNumber = Number(quantity);
      let priceWithOptionsAndQuantityAsNumber = Number(
        priceWithOptionsAndQuantity
      );

      // Calculate the pricePerUnitWithOptions of the item:
      // If the quantity is 0 (which is a rare or edge case), set the base price to 0
      // to avoid division by zero errors.
      const priceOfOneItemWithOptions =
        quantityAsNumber > 0
          ? priceWithOptionsAndQuantityAsNumber / quantityAsNumber
          : 0;

      const newQuantity =
        operation === "add"
          ? quantityAsNumber + 1
          : operation === "deduct"
          ? quantityAsNumber - 1
          : quantityAsNumber;

      if (newQuantity === 0) {
        removeCartItem($id);

        return; // Exit the function after deletion
      }

      const newPrice = priceOfOneItemWithOptions * newQuantity;

      cartItemObject.quantity = newQuantity;
      cartItemObject.priceWithOptionsAndQuantity = newPrice;
      const updatedCartItemJson = JSON.stringify(cartItemObject);

      await manageDatabaseDocument(
        "update",
        databaseId,
        cartItemsCollectionId,
        $id,
        { cartItem: updatedCartItemJson }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
