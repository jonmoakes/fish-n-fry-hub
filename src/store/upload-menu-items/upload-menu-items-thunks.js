import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import { databaseId, fishCollectionId } from "../../constants/constants";
import { fishItems } from "./menu-objects/fish-items";
import { ID } from "appwrite";

export const uploadMenuItemsToDatabaseAsync = createAsyncThunk(
  "uploadMenuItemsToDatabase",
  async (_, thunkAPI) => {
    try {
      const items = [];
      // make sure to import correct menu items
      let menuItems = fishItems;

      // make sure to import correct collectionId
      for (const menuItem of menuItems) {
        const result = await manageDatabaseDocument(
          "create",
          databaseId,
          fishCollectionId,
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
