import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyleSheetManager } from "styled-components";
import { Elements } from "@stripe/react-stripe-js";
import "regenerator-runtime";
import App from "./App";
import "./index.css";

import { stripePromise } from "./constants/constants";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </StyleSheetManager>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
