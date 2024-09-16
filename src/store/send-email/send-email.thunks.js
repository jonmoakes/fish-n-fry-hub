import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  SEND_EMAIL_ORDER_CONFIRMATION_ENDPOINT,
  SEND_EMAIL_ORDER_NOT_ADDED_TO_DATABASE_ENDPOINT,
} from "../../../netlify/api-endpoints/api-endpoints";

export const sendEmailOrderConfirmationAsync = createAsyncThunk(
  "sendEmailOrderConfirmation",
  async ({ email, name, emailOfOrder }, thunkAPI) => {
    try {
      const response = await axios.post(
        SEND_EMAIL_ORDER_CONFIRMATION_ENDPOINT,
        {
          email,
          name,
          emailOfOrder,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailOrderNotAddedToDatabaseAsync = createAsyncThunk(
  "sendEmailOrderNotAddedToDatabase",
  async ({ cartItems, name, email }, thunkAPI) => {
    try {
      const orderDetails = JSON.stringify(cartItems);

      const response = await axios.post(
        SEND_EMAIL_ORDER_NOT_ADDED_TO_DATABASE_ENDPOINT,
        {
          name,
          email,
          orderDetails,
        }
      );

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
