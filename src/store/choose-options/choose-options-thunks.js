import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchOptionPrice,
  getRetrievedDocuments,
} from "./choose-options-actions";

import {
  drinksCollectionId,
  saucesCollectionId,
  meatsCollectionId,
  piesCollectionId,
  condimentsCollectionId,
} from "../../constants/constants";

export const fetchGratedCheesePriceAsync = createAsyncThunk(
  "fetchGratedCheesePrice",
  async (_, thunkAPI) => {
    try {
      const gratedCheesePrice = await fetchOptionPrice("gratedCheesePrice");
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
      const donerMeatPrice = await fetchOptionPrice("donerMeatPrice");
      return donerMeatPrice;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// the 3 arguments passed to getRetrievedDocuments refer to the search values in all the below thunks.
//They are passed for clarity even when not needed.
export const fetchSaucesDocumentsAsync = createAsyncThunk(
  "fetchSaucesDocuments",
  async (_, thunkAPI) => {
    try {
      const documents = await getRetrievedDocuments(
        false,
        null,
        null,
        saucesCollectionId
      );
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMeatsDocumentsAsync = createAsyncThunk(
  "fetchMeatsDocuments",
  async (_, thunkAPI) => {
    try {
      const documents = await getRetrievedDocuments(
        false,
        null,
        null,
        meatsCollectionId
      );
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPiesDocumentsAsync = createAsyncThunk(
  "fetchPiesDocuments",
  async (_, thunkAPI) => {
    try {
      const documents = await getRetrievedDocuments(
        false,
        null,
        null,
        piesCollectionId
      );
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCondimentsDocumentsAsync = createAsyncThunk(
  "fetchCondimentsDocuments",
  async (_, thunkAPI) => {
    try {
      const documents = await getRetrievedDocuments(
        false,
        null,
        null,
        condimentsCollectionId
      );
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCansDocumentsAsync = createAsyncThunk(
  "fetchCansDocuments",
  async (_, thunkAPI) => {
    try {
      const documents = await getRetrievedDocuments(
        true,
        "name",
        "( can )",
        drinksCollectionId
      );
      return documents;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
