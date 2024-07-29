import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  drinksCollectionId,
  optionsPricesCollectionId,
  optionsPricesDocumentId,
} from "../../constants/constants";

export const fetchOptionsPricesDocumentsAsync = createAsyncThunk(
  "fetchOptionsPricesDocuments",
  async (_, thunkAPI) => {
    try {
      const getOptionsPrices = await manageDatabaseDocument(
        "get",
        databaseId,
        optionsPricesCollectionId,
        optionsPricesDocumentId
      );

      const { donerMeatPrice, gratedCheesePrice } = getOptionsPrices;

      return {
        donerMeatPrice: donerMeatPrice,
        gratedCheesePrice: gratedCheesePrice,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCansDocumentsAsync = createAsyncThunk(
  "getCansDocuments",
  async (_, thunkAPI) => {
    try {
      const searchIndex = "name";
      const searchValue = "( can )";

      const getCanDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        drinksCollectionId,
        searchIndex,
        searchValue,
        true,
        null
      );

      const { documents } = getCanDocuments;

      if (!documents.length) {
        return [];
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
