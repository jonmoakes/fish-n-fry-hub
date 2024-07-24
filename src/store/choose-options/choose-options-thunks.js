import { createAsyncThunk } from "@reduxjs/toolkit";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
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
