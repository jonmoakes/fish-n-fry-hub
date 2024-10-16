import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEND_CONTACT_FORM_MESSAGE_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const sendContactFormMessageAsync = createAsyncThunk(
  "sendContactFormMessage",
  async ({ name, email, message }, thunkAPI) => {
    try {
      const response = await axios.post(SEND_CONTACT_FORM_MESSAGE_ENDPOINT, {
        name,
        email,
        message,
      });

      const statusCode = response.status;
      return statusCode;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
