import { createAsyncThunk } from "@reduxjs/toolkit";
import { databaseId, cartItemsCollectionId } from "../../constants/constants";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { ID } from "appwrite";

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

export const getUserCartItemsAsync = createAsyncThunk(
  "getUserCartItems",
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
