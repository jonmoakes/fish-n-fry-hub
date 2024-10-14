import { burgersObject } from "./product-objects/burgers-object";
import { chipsObject } from "./product-objects/chips-object";
import { chickenObject } from "./product-objects/chicken-object";
import { fishObject } from "./product-objects/fish-object";
import { donerKebabsObject } from "./product-objects/doner-kebabs-object";
import { chickenKebabsObject } from "./product-objects/chicken-kebabs-object";
import { mixedMeatsKebabsKebabsObject } from "./product-objects/mixed-meats-kebabs-object";
import { chickenCurryObject } from "./product-objects/chicken-curry-object";
import { savouriesObject } from "./product-objects/savouries-object";
import { specialsObject } from "./product-objects/specials-object";

import {
  burgersCollectionId,
  chickenCollectionId,
  chickenCurryCollectionId,
  chipsCollectionId,
  donerKebabsCollectionId,
  fishCollectionId,
  chickenKebabsCollectionId,
  mixedMeatKebabsCollectionId,
  jacketPotatoCollectionId,
  piesCollectionId,
  savouriesCollectionId,
  specialsCollectionId,
  extrasCollectionId,
  drinksCollectionId,
} from "../../constants/constants";
import { extrasObject } from "./product-objects/extras-object";
import { basicProductObject } from "./product-objects/basic-product-object";

export const productToUpload = (category, productToAdd) => {
  switch (category) {
    case "burgers":
      return burgersObject(productToAdd);
    case "chicken":
      return chickenObject(productToAdd);
    case "chips":
      return chipsObject(productToAdd);
    case "fish":
      return fishObject(productToAdd);
    case "doner kebabs":
      return donerKebabsObject(productToAdd);
    case "chicken kebabs":
      return chickenKebabsObject(productToAdd);
    case "mixed meats kebabs":
      return mixedMeatsKebabsKebabsObject(productToAdd);
    case "chicken curry":
      return chickenCurryObject(productToAdd);
    case "pies":
    case "jacket potato":
    case "drinks":
      return basicProductObject(productToAdd);
    case "savouries":
      return savouriesObject(productToAdd);
    case "specials":
      return specialsObject(productToAdd);
    case "extras":
      return extrasObject(productToAdd);
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
    case "chips":
      return chipsCollectionId;
    case "fish":
      return fishCollectionId;
    case "doner kebabs":
      return donerKebabsCollectionId;
    case "chicken kebabs":
      return chickenKebabsCollectionId;
    case "mixed meats kebabs":
      return mixedMeatKebabsCollectionId;
    case "jacket potato":
      return jacketPotatoCollectionId;
    case "chicken curry":
      return chickenCurryCollectionId;
    case "pies":
      return piesCollectionId;
    case "savouries":
      return savouriesCollectionId;
    case "specials":
      return specialsCollectionId;
    case "extras":
      return extrasCollectionId;
    case "drinks":
      return drinksCollectionId;
    default:
      return "";
  }
};
