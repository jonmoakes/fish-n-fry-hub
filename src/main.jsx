import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StyleSheetManager } from "styled-components";
import App from "./App";
import "./index.css";

import "regenerator-runtime";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "theme"}>
          <App />
        </StyleSheetManager>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
