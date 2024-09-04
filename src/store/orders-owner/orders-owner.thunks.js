import { createAsyncThunk } from "@reduxjs/toolkit";
import { isSameDay } from "date-fns";

import {
  databaseId,
  highRateLimit,
  ordersCollectionId,
  standardRateLimit,
} from "../../constants/constants";
import {
  listDocumentsInACollection,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";
import { formatOrderString } from "../../functions/format-order-string/fomat-order-string";
import { getParsedOrderItems } from "../../functions/get-parsed-order-items";
import { getGrandTotalOfOrder } from "../../functions/get-grand-total-of-order";

export const fetchOrdersOwnerFromCurrentDayAsync = createAsyncThunk(
  "fetchOrdersOwnerFromCurrentDay",
  async (_, thunkAPI) => {
    try {
      const orderDocuments = await listDocumentsInACollection(
        databaseId,
        ordersCollectionId,
        standardRateLimit
      );

      const { documents } = orderDocuments;

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

          return {
            customerName: order.customerName,
            customerEmail: order.customerEmail,
            createdAt: order.$createdAt,
            orderId: order.$id,
            orderStatus: order.orderStatus,
            grandTotal: `£${(grandTotal / 100).toFixed(2)}`,
            order: orderItems.map((ord) => formatOrderString(ord.cartItem)),
            createdAtAsDateObjectForSearching: new Date(order.$createdAt), // Create Date object for searching
          };
        });

      const sortedOrders = orders.sort((orderA, orderB) => {
        const dateA = new Date(orderA.createdAt);
        const dateB = new Date(orderB.createdAt);
        return dateB - dateA;
      });

      return sortedOrders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
          orderStatus: order.orderStatus,
          grandTotal: `£${(grandTotal / 100).toFixed(2)}`,
          order: orderItems.map((ord) => formatOrderString(ord.cartItem)),
          createdAtAsDateObjectForSearching: new Date(order.$createdAt), // Create Date object for searching
        };
      });

      const sortedOrders = orders.sort((orderA, orderB) => {
        const dateA = new Date(orderA.createdAt);
        const dateB = new Date(orderB.createdAt);
        return dateB - dateA;
      });

      return sortedOrders;
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
