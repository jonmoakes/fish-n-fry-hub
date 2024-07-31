import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import { databaseId, extrasCollectionId } from "../../constants/constants";
import { extrasItems } from "./menu-objects/extras-items";
import { ID } from "appwrite";

export const uploadMenuItemsToDatabaseAsync = createAsyncThunk(
  "uploadMenuItemsToDatabase",
  async (_, thunkAPI) => {
    try {
      const items = [];
      // make sure to import correct menu items
      let menuItems = extrasItems;

      // make sure to import correct collectionId
      for (const menuItem of menuItems) {
        const result = await manageDatabaseDocument(
          "create",
          databaseId,
          extrasCollectionId,
          ID.unique(),
          menuItem
        );

        items.push(result);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
