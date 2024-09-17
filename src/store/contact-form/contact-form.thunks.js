import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEND_CONTACT_FORM_MESSAGE_ENDPOINT } from "../../../netlify/api-endpoints/api-endpoints";

export const sendContactFormMessageAsync = createAsyncThunk(
  "sendContactFormMessage",
  async ({ name, email, message }, thunkAPI) => {
    try {
      // for production, write a function to decide email destination
      // testing can only send to app owner email, so added it here.
      const sendTo = import.meta.env.VITE_APP_ADMIN_EMAIL;

      const response = await axios.post(SEND_CONTACT_FORM_MESSAGE_ENDPOINT, {
        sendTo,
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
