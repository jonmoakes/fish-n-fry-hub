import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listDocumentsByQueryOrSearch,
  listDocumentsInACollection,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  drinksCollectionId,
  optionsPricesCollectionId,
  optionsPricesDocumentId,
  saucesCollectionId,
  smallRateLimit,
} from "../../constants/constants";

export const fetchGratedCheesePriceAsync = createAsyncThunk(
  "fetchGratedCheesePrice",
  async (_, thunkAPI) => {
    try {
      const getOptionsPrices = await manageDatabaseDocument(
        "get",
        databaseId,
        optionsPricesCollectionId,
        optionsPricesDocumentId
      );

      const { gratedCheesePrice } = getOptionsPrices;

      return gratedCheesePrice;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDonerMeatPriceAsync = createAsyncThunk(
  "fetchDonerMeatPrice",
  async (_, thunkAPI) => {
    try {
      const getOptionsPrices = await manageDatabaseDocument(
        "get",
        databaseId,
        optionsPricesCollectionId,
        optionsPricesDocumentId
      );

      const { donerMeatPrice } = getOptionsPrices;

      return donerMeatPrice;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSaucesDocumentsAsync = createAsyncThunk(
  "fetchSaucesDocuments",
  async (_, thunkAPI) => {
    try {
      const saucesDocuments = await listDocumentsInACollection(
        databaseId,
        saucesCollectionId,
        smallRateLimit
      );

      const { documents } = saucesDocuments;

      if (!documents.length) {
        return [];
      }

      const transformedDocuments = documents.map(({ $id, name }) => ({
        $id,
        name,
      }));

      return transformedDocuments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCansDocumentsAsync = createAsyncThunk(
  "fetchCansDocuments",
  async (_, thunkAPI) => {
    try {
      const searchIndex = "name";
      const searchValue = "( can )";

      const canDocuments = await listDocumentsByQueryOrSearch(
        databaseId,
        drinksCollectionId,
        searchIndex,
        searchValue,
        true,
        null
      );

      const { documents } = canDocuments;

      if (!documents.length) {
        return [];
      }

      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
