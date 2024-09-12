import { createAsyncThunk } from "@reduxjs/toolkit";

import { getParsedOrderItems } from "../../functions/get-parsed-order-items";
import { getGrandTotalOfOrder } from "../../functions/get-grand-total-of-order";
import {
  getOrdersCustomerDocuments,
  ordersCustomerObject,
} from "./orders-customer-functions";
import { sortedOrders } from "../../functions/sorted-orders";

export const fetchOrdersCustomerAsync = createAsyncThunk(
  "fetchOrdersCustomer",
  async ({ id }, thunkAPI) => {
    try {
      const documents = await getOrdersCustomerDocuments(id);

      if (!documents.length) {
        return [];
      }

      const orders = documents.map((order) => {
        const orderItems = getParsedOrderItems(order.order);
        const grandTotal = getGrandTotalOfOrder(orderItems);
        return ordersCustomerObject(order, grandTotal, orderItems);
      });

      return sortedOrders(orders);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
