import { createAsyncThunk } from "@reduxjs/toolkit";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  userCollectionId,
  standardRateLimit,
} from "../../constants/constants";

export const getAllUsersAsync = createAsyncThunk(
  "getAllUsersInUsersCollection",
  async ({ id }, thunkAPI) => {
    try {
      const getUsersDocuments = await listDocumentsInACollection(
        databaseId,
        userCollectionId,
        standardRateLimit
      );

      const { documents, total } = getUsersDocuments;
      if (!total) return;

      const documentsWithoutAppOwner = documents.filter((doc) => doc.id !== id);

      const processedUsers = documentsWithoutAppOwner.map(
        ({
          $collectionId,
          $createdAt,
          $databaseId,
          $id,
          $permissions,
          $updatedAt,
          ...rest
        }) => rest
      );

      return processedUsers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
