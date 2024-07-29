import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import { databaseId, chickenCollectionId } from "../../constants/constants";
import { ID } from "appwrite";
import { chickenItems } from "./menu-objects/chicken-items";

export const uploadMenuItemsToDatabaseAsync = createAsyncThunk(
  "uploadMenuItemsToDatabase",
  async (_, thunkAPI) => {
    try {
      const items = [];
      // make sure to import correct menu items
      let menuItems = chickenItems;

      for (const menuItem of menuItems) {
        const result = await manageDatabaseDocument(
          "create",
          databaseId,
          chickenCollectionId,
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
