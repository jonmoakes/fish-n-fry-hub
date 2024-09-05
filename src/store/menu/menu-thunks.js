import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsInACollection,
  // manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import {
  standardRateLimit,
  databaseId,
  burgersCollectionId,
  chickenCollectionId,
  chickenCurryCollectionId,
  chipsCollectionId,
  extrasCollectionId,
  drinksCollectionId,
  fishCollectionId,
  jacketPotatoCollectionId,
  donerKebabsCollectionId,
  chickenKebabsCollectionId,
  mixedMeatKebabsCollectionId,
  piesCollectionId,
  savouriesCollectionId,
  specialsCollectionId,
  // hasNewMenuItemsCollectionId,
  // hasNewMenuItemsDocumentId,
} from "../../constants/constants";

const collections = [
  burgersCollectionId,
  chickenCollectionId,
  chickenCurryCollectionId,
  chipsCollectionId,
  fishCollectionId,
  jacketPotatoCollectionId,
  donerKebabsCollectionId,
  chickenKebabsCollectionId,
  mixedMeatKebabsCollectionId,
  piesCollectionId,
  savouriesCollectionId,
  specialsCollectionId,
  extrasCollectionId,
  drinksCollectionId,
];

export const fetchMenuDocumentsAsync = createAsyncThunk(
  "fetchMenuDocuments",
  async (_, thunkAPI) => {
    try {
      const promises = collections.map((collectionId) =>
        listDocumentsInACollection(databaseId, collectionId, standardRateLimit)
      );

      const results = await Promise.all(promises);
      const allDocuments = results.flatMap((result) => result.documents);

      return allDocuments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const checkForNewMenuItemsAsync = createAsyncThunk(
//   "checkForNewMenuItems",
//   async (_, thunkAPI) => {
//     try {
//       const getHasNewMenuItemsValue = await manageDatabaseDocument(
//         "get",
//         databaseId,
//         hasNewMenuItemsCollectionId,
//         hasNewMenuItemsDocumentId
//       );

//       const { hasNewMenuItems } = getHasNewMenuItemsValue;

//       return hasNewMenuItems;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
