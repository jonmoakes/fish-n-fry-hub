import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { logger } from "redux-logger";
import { rememberEnhancer, rememberReducer } from "redux-remember";

const middlewares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const rememberedKeys = ["menu", "chooseOptions"];

export const store = configureStore({
  reducer: rememberReducer(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedKeys)
    ),
});
