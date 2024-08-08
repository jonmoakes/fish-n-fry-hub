import { createAsyncThunk } from "@reduxjs/toolkit";

import { CREATE_PAYMENT_INTENT_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const getClientSecretAsync = createAsyncThunk(
  "getClientSecret",
  async ({ stripeSecretKey, grandTotal }, thunkAPI) => {
    try {
      const response = await fetch(CREATE_PAYMENT_INTENT_ENDPOINT, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stripeSecretKey,
          amount: grandTotal,
        }),
      }).then((res) => res.json());

      const client_secret = response.paymentIntent.client_secret;

      return client_secret;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPaymentResultObjectAsync = createAsyncThunk(
  "getPaymentResultObject",
  async ({ stripe, client_secret, cardElement, name, email }, thunkAPI) => {
    try {
      const paymentResultObject = await stripe.confirmCardPayment(
        client_secret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name,
              email,
            },
          },
        }
      );
      return paymentResultObject;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
