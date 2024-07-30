import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import { databaseId, chipsCollectionId } from "../../constants/constants";
import { chipsItems } from "./menu-objects/chips-items";

export const uploadMenuItemsToDatabaseAsync = createAsyncThunk(
  "uploadMenuItemsToDatabase",
  async (_, thunkAPI) => {
    try {
      const items = [];
      // make sure to import correct menu items
      let menuItems = chipsItems;

      // make sure to import correct collectionId
      for (const menuItem of menuItems) {
        const result = await manageDatabaseDocument(
          "create",
          databaseId,
          chipsCollectionId,
          menuItem.id,
          menuItem
        );

        items.push(result);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
