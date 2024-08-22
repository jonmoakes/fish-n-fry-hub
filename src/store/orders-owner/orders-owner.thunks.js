import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  databaseId,
  highRateLimit,
  ordersCollectionId,
} from "../../constants/constants";
import { listDocumentsInACollection } from "../../utils/appwrite/appwrite-functions";
import { formatOrderString } from "../../functions/format-order-string/fomat-order-string";
import { getParsedOrderItems } from "../../functions/get-parsed-order-items";
import { getGrandTotalOfOrder } from "../../functions/get-grand-total-of-order";

export const fetchOrdersOwnerAllOrdersAsync = createAsyncThunk(
  "fetchOrdersOwnerAllOrders",
  async (_, thunkAPI) => {
    try {
      const orderDocuments = await listDocumentsInACollection(
        databaseId,
        ordersCollectionId,
        highRateLimit
      );

      const { documents } = orderDocuments;

      if (!documents.length) {
        return [];
      }

      const orders = documents.map((order) => {
        const orderItems = getParsedOrderItems(order.order);
        const grandTotal = getGrandTotalOfOrder(orderItems);

        return {
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          createdAt: order.$createdAt,
          orderId: order.$id,
          grandTotal: `£${(grandTotal / 100).toFixed(2)}`,
          order: orderItems.map((ord) => formatOrderString(ord.cartItem)),
        };
      });

      return orders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
