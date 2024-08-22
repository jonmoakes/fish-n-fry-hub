import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  cartItemsCollectionId,
  databaseId,
  ordersCollectionId,
} from "../../constants/constants";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { ID } from "appwrite";

export const addOrderToDatabaseAsync = createAsyncThunk(
  "addOrderToDatabase",
  async ({ cartItems, name, email }, thunkAPI) => {
    try {
      const orderJsonString = JSON.stringify(cartItems);

      const orderDocument = {
        customerName: name,
        customerEmail: email,
        order: orderJsonString,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        ordersCollectionId,
        ID.unique(),
        orderDocument
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// on successful order
export const deleteUserCartItemsAsync = createAsyncThunk(
  "deleteUserCartItems",
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

      // Check if there are no cart items
      if (!documents.length) {
        return []; // Return an empty array if there are no cart items
      }

      // Proceed to delete the cart items
      const deletePromises = documents.map(({ $id }) =>
        manageDatabaseDocument("delete", databaseId, cartItemsCollectionId, $id)
      );

      await Promise.all(deletePromises);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
