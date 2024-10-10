import { burgersCollectionId } from "../../constants/constants";
import { burgersObject } from "./product-objects/burgers-object";

export const productToUpload = (category, productToAdd) => {
  switch (category) {
    case "burgers":
      return burgersObject(productToAdd);
    default:
      return {};
  }
};

export const collectionIdOfNewProduct = (category) => {
  switch (category) {
    case "burgers":
      return burgersCollectionId;
    default:
      return "";
  }
};
