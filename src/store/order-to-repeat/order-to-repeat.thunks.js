import { createAsyncThunk } from "@reduxjs/toolkit";
import { databaseId, ordersCollectionId } from "../../constants/constants";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import { getParsedOrderItems } from "../../functions/get-parsed-order-items";
import { getGrandTotalOfOrder } from "../../functions/get-grand-total-of-order";
import { formatOrderString } from "../../functions/format-order-string/fomat-order-string";
import { ID } from "appwrite";

export const fetchOrderToRepeatAsync = createAsyncThunk(
  "fetchOrderToRepeat",
  async ({ idOfOrderToRepeat }, thunkAPI) => {
    try {
      if (!idOfOrderToRepeat) {
        return null;
      }
      const getOrderToRepeat = await manageDatabaseDocument(
        "get",
        databaseId,
        ordersCollectionId,
        idOfOrderToRepeat
      );

      const { order, customerId } = getOrderToRepeat;

      const orderItems = getParsedOrderItems(order);
      const repeatOrderForDisplayingToUser = orderItems.map((ord) =>
        formatOrderString(ord.cartItem)
      );
      const repeatOrderGrandTotal = getGrandTotalOfOrder(orderItems);

      const orderToRepeatDetails = {
        customerId,
        repeatOrderForDisplayingToUser,
        repeatOrderGrandTotal,
        repeatOrderForDb: order,
        repeatOrderAsEmail: repeatOrderForDisplayingToUser.join("\n"),
      };

      return orderToRepeatDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRepeatOrderToDatabaseAsync = createAsyncThunk(
  "addRepeatOrderToDatabase",
  async ({ name, email, repeatOrderForDb, id }, thunkAPI) => {
    try {
      const orderDocument = {
        customerName: name,
        customerEmail: email,
        order: repeatOrderForDb,
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
