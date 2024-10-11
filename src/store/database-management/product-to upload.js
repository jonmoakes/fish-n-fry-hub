import {
  burgersCollectionId,
  chickenCollectionId,
  chickenCurryCollectionId,
} from "../../constants/constants";
import { burgersObject } from "./product-objects/burgers-object";
import { chickenCurryObject } from "./product-objects/chicken-curry-object";
import { chickenObject } from "./product-objects/chicken-object";

export const productToUpload = (category, productToAdd) => {
  switch (category) {
    case "burgers":
      return burgersObject(productToAdd);
    case "chicken":
      return chickenObject(productToAdd);
    case "chicken curry":
      return chickenCurryObject(productToAdd);
    default:
      return {};
  }
};

export const collectionIdOfNewProduct = (category) => {
  switch (category) {
    case "burgers":
      return burgersCollectionId;
    case "chicken":
      return chickenCollectionId;
    case "chicken curry":
      return chickenCurryCollectionId;
    default:
      return "";
  }
};
