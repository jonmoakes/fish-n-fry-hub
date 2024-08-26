import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { SEND_EMAIL_ORDER_CONFIRMATION_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const sendEmailOrderConfirmationAsync = createAsyncThunk(
  "sendEmailOrderConfirmation",
  async ({ email, name, formattedStringOfOrderForEmail }, thunkAPI) => {
    try {
      const orderDetails = formattedStringOfOrderForEmail;

      // need to formated order details here.
      // console.log(orderDetails);

      const response = await axios.post(
        SEND_EMAIL_ORDER_CONFIRMATION_ENDPOINT,
        {
          email,
          name,
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
