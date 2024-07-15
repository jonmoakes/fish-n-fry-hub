import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";

import {
  getRetrievedUserFromDocument,
  createDocumentAndSetUser,
} from "./functions";

export const getUserOnLoadAsync = createAsyncThunk(
  "user/getUserOnLoad",
  async (_, thunkAPI) => {
    try {
      const user = await account.get();
      const session = await account.getSession("current");

      if (!user || !session) return;

      const retrievedUser = await getRetrievedUserFromDocument();
      if (retrievedUser) {
        return retrievedUser;
      } else {
        return "no user found";
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInAsync = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      await account.createEmailSession(email, password);
      return await getRetrievedUserFromDocument();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "user/signUp",
  async ({ email, password, name }, thunkAPI) => {
    try {
      await account.create(ID.unique(), email, password, name);
      await account.createEmailSession(email, password);
      return await createDocumentAndSetUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOutAsync = createAsyncThunk(
  "user/signOut",
  async (_, thunkAPI) => {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
