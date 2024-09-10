import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { standardRateLimit } from "../../constants/constants";

export const requestIncomeDataAsync = createAsyncThunk(
  "requestIncomeData",
  async ({ stripeSecretKey }, thunkAPI) => {
    try {
      const response = await axios.post(
        "/.netlify/functions/get-received-payments",
        {
          stripeSecretKey,
          limit: standardRateLimit,
        }
      );

      const incomeData = response.data;

      const filteredIncomeData = incomeData
        .filter((item) => item.status === "succeeded")
        .map((item) => {
          const {
            payment_intent,
            amount,
            currency,
            created,
            receipt_url,
            billing_details,
          } = item;
          const { email, name } = billing_details;

          return {
            payment_intent,
            amount,
            currency,
            created,
            receipt_url,
            email,
            name,
          };
        });
      return filteredIncomeData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
