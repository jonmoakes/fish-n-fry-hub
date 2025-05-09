import { createAsyncThunk } from "@reduxjs/toolkit";
import { isSameDay } from "date-fns";

import { manageDatabaseDocument } from "../../utils/appwrite/appwrite-functions";
import { getParsedOrderItems } from "../../functions/get-parsed-order-items";
import { getGrandTotalOfOrder } from "../../functions/get-grand-total-of-order";
import {
  getOrdersOwnerDocuments,
  ordersOwnerObject,
} from "./orders-owner-functions";
import { sortedOrders } from "../../functions/sorted-orders";

import {
  databaseId,
  highRateLimit,
  ordersCollectionId,
  standardRateLimit,
} from "../../constants/constants";

export const fetchOrdersOwnerFromCurrentDayAsync = createAsyncThunk(
  "fetchOrdersOwnerFromCurrentDay",
  async (_, thunkAPI) => {
    try {
      const documents = await getOrdersOwnerDocuments(standardRateLimit);

      if (!documents.length) {
        return [];
      }

      const today = new Date();

      const orders = documents
        .filter((order) => {
          const orderDate = new Date(order.$createdAt);
          return isSameDay(orderDate, today);
        })
        .map((order) => {
          const orderItems = getParsedOrderItems(order.order);
          const grandTotal = getGrandTotalOfOrder(orderItems);
          return ordersOwnerObject(order, grandTotal, orderItems);
        });

      return sortedOrders(orders);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOrdersOwnerAllTimeOrdersAsync = createAsyncThunk(
  "fetchOrdersOwnerAllTimeOrders",
  async (_, thunkAPI) => {
    try {
      const documents = await getOrdersOwnerDocuments(highRateLimit);

      if (!documents.length) {
        return [];
      }

      const orders = documents.map((order) => {
        const orderItems = getParsedOrderItems(order.order);
        const grandTotal = getGrandTotalOfOrder(orderItems);
        return ordersOwnerObject(order, grandTotal, orderItems);
      });

      return sortedOrders(orders);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateOrderStatusAsync = createAsyncThunk(
  " updateOrderStatus",
  async ({ attributeToUpdate, newOrderStatus, documentId }, thunkAPI) => {
    try {
      const dataToUpdate = {
        [attributeToUpdate]: newOrderStatus,
      };
      await manageDatabaseDocument(
        "update",
        databaseId,
        ordersCollectionId,
        documentId,
        dataToUpdate
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
