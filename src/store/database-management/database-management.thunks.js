import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  cartItemsCollectionId,
  databaseId,
  optionsPricesCollectionId,
  optionsPricesDocumentId,
  ordersCollectionId,
} from "../../constants/constants";
import {
  listDocumentsByQueryOrSearch,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { account } from "../../utils/appwrite/appwrite-config";
import { ID } from "appwrite";
import { updateProductInMenuStore } from "../menu/menu.slice";
import { updateProductToEdit } from "./database-management.slice";
import { collectionIdOfNewProduct, productToUpload } from "./product-to upload";

export const addOrderToDatabaseAsync = createAsyncThunk(
  "addOrderToDatabase",
  async ({ cartItems, name, email, id }, thunkAPI) => {
    try {
      const orderJsonString = JSON.stringify(cartItems);

      const orderDocument = {
        customerName: name,
        customerEmail: email,
        order: orderJsonString,
        customerId: id,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        ordersCollectionId,
        ID.unique(),
        orderDocument
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// on successful order
export const deleteUserCartItemsAsync = createAsyncThunk(
  "deleteUserCartItems",
  async ({ id }, thunkAPI) => {
    try {
      const queryIndex = "userId";
      const queryValue = id;

      const usersCartItems = await listDocumentsByQueryOrSearch(
        databaseId,
        cartItemsCollectionId,
        queryIndex,
        queryValue,
        false,
        null
      );

      const { documents } = usersCartItems;

      // Check if there are no cart items
      if (!documents.length) {
        return []; // Return an empty array if there are no cart items
      }

      // Proceed to delete the cart items
      const deletePromises = documents.map(({ $id }) =>
        manageDatabaseDocument("delete", databaseId, cartItemsCollectionId, $id)
      );

      await Promise.all(deletePromises);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDocumentAsync = createAsyncThunk(
  "deleteDocument",
  async ({ collectionId, documentId }, thunkAPI) => {
    try {
      await manageDatabaseDocument(
        "delete",
        databaseId,
        collectionId,
        documentId
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dbManageAddOrderToDatabaseAsync = createAsyncThunk(
  "dbManageAddOrderToDatabase",
  async (
    { orderDetails, customerName, customerEmail, customerId },
    thunkAPI
  ) => {
    try {
      const orderDocument = {
        order: orderDetails,
        customerName,
        customerEmail,
        customerId,
      };

      await manageDatabaseDocument(
        "create",
        databaseId,
        ordersCollectionId,
        ID.unique(),
        orderDocument
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProductPricesAsync = createAsyncThunk(
  "updateProductPrices",
  async ({ attributeKey, newValue, $collectionId, $id }, thunkAPI) => {
    try {
      const priceAsNumber = Number(newValue);

      const dataToUpdate = {
        [attributeKey]: priceAsNumber,
      };

      await manageDatabaseDocument(
        "update",
        databaseId,
        $collectionId,
        $id,
        dataToUpdate
      );

      const state = thunkAPI.getState();
      const menuDocuments = state.menu.menuDocuments;

      const updatedProductInMenu = menuDocuments.find(
        (product) => product.$id === $id
      );
      const newUpdatedProduct = {
        ...updatedProductInMenu,
        [attributeKey]: priceAsNumber,
      };

      thunkAPI.dispatch(updateProductInMenuStore(newUpdatedProduct));

      // this will update the appropriate keys and values with whatever the users types in so that it is updated in the ui after successfully changing the values in the database. When you edit the product, the productToEdit is added as separate state. So we update the actual menu store and now also the productToEdit object which will now reflect the latest values for the app owner in case they want to change anything else before navigating away from the screen.
      const productToEdit = state.databaseManagement.productToEdit;

      thunkAPI.dispatch(
        updateProductToEdit({
          ...productToEdit,
          [attributeKey]: priceAsNumber,
        })
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewMenuProductAsync = createAsyncThunk(
  "createNewMenuProduct",
  async ({ productToAdd }, thunkAPI) => {
    const { category } = productToAdd;

    try {
      await manageDatabaseDocument(
        "create",
        databaseId,
        collectionIdOfNewProduct(category),
        ID.unique(),
        productToUpload(category, productToAdd)
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOptionsPricesAsync = createAsyncThunk(
  "fetchOptionsPrices",
  async (_, thunkAPI) => {
    try {
      const optionsPrices = await manageDatabaseDocument(
        "get",
        databaseId,
        optionsPricesCollectionId,
        optionsPricesDocumentId
      );

      return optionsPrices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateOptionPriceAsync = createAsyncThunk(
  "updateOptionPrice",
  async ({ newOptionPrice, attributeKey }, thunkAPI) => {
    try {
      const priceAsNumber = Number(newOptionPrice);

      const dataToUpdate = {
        [attributeKey]: priceAsNumber,
      };

      await manageDatabaseDocument(
        "update",
        databaseId,
        optionsPricesCollectionId,
        optionsPricesDocumentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// if updateEmail succeeds, it will still throw an error as it will try to update the email to be what it already is.
// This will also confirm that the password is correct though which is what we need.
// As we don't pass an email other than the one already in the store, It can't ever be updated to another email address here.
// we only want to check the password to allow access to managing the db.
export const confirmPasswordForDbManagementAccessAsync = createAsyncThunk(
  "confirmPasswordForDbManagementAccess",
  async ({ email, password }, thunkAPI) => {
    try {
      await account.updateEmail(email, password);
    } catch (error) {
      if (error.message === "A target with the same ID already exists.") {
        localStorage.setItem(
          "userHasSuccessfullyEnteredPasswordToAccessDbManagement",
          true
        );
        return thunkAPI.rejectWithValue("success");
      } else {
        return thunkAPI.rejectWithValue("failure");
      }
    }
  }
);
