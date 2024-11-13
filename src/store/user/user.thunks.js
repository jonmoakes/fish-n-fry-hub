import { createAsyncThunk } from "@reduxjs/toolkit";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID, OAuthProvider } from "appwrite";

import { menuRoute, signInRoute } from "../../strings/routes/routes-strings";

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

      const createdUser = await createDocumentAndSetUser();

      if (retrievedUser) {
        return retrievedUser;
      } else if (createdUser) {
        return createdUser;
      } else if (!retrievedUser && !createdUser) {
        return null;
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
      await account.createEmailPasswordSession(email, password);
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
      await account.createEmailPasswordSession(email, password);
      return await createDocumentAndSetUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInWithGoogleAsync = createAsyncThunk(
  "user/signInWithGoogle",
  async (_, thunkAPI) => {
    try {
      const redirectUrl =
        import.meta.env.MODE === "development"
          ? "http://localhost:8888/menu"
          : `https://fishnfry-hub.netlify.app${menuRoute}`;

      const fallbackUrl =
        import.meta.env.MODE === "development"
          ? "http://localhost:8888/sign-in"
          : `https://fishnfry-hub.netlify.app${signInRoute}`;

      await account.createOAuth2Session(
        OAuthProvider.Google,
        redirectUrl,
        fallbackUrl
      );
      return await getRetrievedUserFromDocument();
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
