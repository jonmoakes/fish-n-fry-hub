import { createAsyncThunk } from "@reduxjs/toolkit";
import { databaseId, ordersCollectionId } from "../../constants/constants";
import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";

import { getParsedOrderItems } from "../../functions/get-parsed-order-items";
import { getGrandTotalOfOrder } from "../../functions/get-grand-total-of-order";
import { formatOrderString } from "../../functions/format-order-string/fomat-order-string";

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

      console.log(getOrderToRepeat);

      const orderItems = getParsedOrderItems(order);
      const grandTotal = getGrandTotalOfOrder(orderItems);

      const orderToRepeatDetails = {
        customerId,
        grandTotal,
        order: orderItems.map((ord) => formatOrderString(ord.cartItem)),
      };

      return orderToRepeatDetails;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
