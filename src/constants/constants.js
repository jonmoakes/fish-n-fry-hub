import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);
export const stripeSecretKey = import.meta.env.VITE_STRIPE_SECRET_KEY;
export const databaseId = import.meta.env.VITE_DATABASE_ID;
export const userCollectionId = import.meta.env.VITE_USER_COLLECTION_ID;
export const appOwnerId = import.meta.env.VITE_APP_OWNER_ID;
export const optionsPricesCollectionId = import.meta.env
  .VITE_OPTIONS_PRICES_COLLECTION_ID;
export const optionsPricesDocumentId = import.meta.env
  .VITE_OPTIONS_PRICES_DOCUMENT_ID;
export const burgersCollectionId = import.meta.env.VITE_BURGERS_COLLECTION_ID;
export const chickenCollectionId = import.meta.env.VITE_CHICKEN_COLLECTION_ID;
export const chickenCurryCollectionId = import.meta.env
  .VITE_CHICKEN_CURRY_COLLECTION_ID;
export const chipsCollectionId = import.meta.env.VITE_CHIPS_COLLECTION_ID;
export const extrasCollectionId = import.meta.env.VITE_EXTRAS_COLLECTION_ID;
export const fishCollectionId = import.meta.env.VITE_FISH_COLLECTION_ID;
export const jacketPotatoCollectionId = import.meta.env
  .VITE_JACKET_POTATO_COLLECTION_ID;
export const drinksCollectionId = import.meta.env.VITE_DRINKS_COLLECTIONS_ID;
export const saucesCollectionId = import.meta.env.VITE_SAUCES_COLLECTION_ID;
export const meatsCollectionId = import.meta.env.VITE_MEATS_COLLECTION_ID;
export const donerKebabsCollectionId = import.meta.env
  .VITE_DONER_KEBABS_COLLECTION_ID;
export const chickenKebabsCollectionId = import.meta.env
  .VITE_CHICKEN_KEBABS_COLLECTION_ID;
export const mixedMeatKebabsCollectionId = import.meta.env
  .VITE_MIXED_MEAT_KEBABS_COLLECTION_ID;
export const piesCollectionId = import.meta.env.VITE_PIES_COLLECTION_ID;
export const savouriesCollectionId = import.meta.env
  .VITE_SAVOURIES_COLLECTION_ID;
export const specialsCollectionId = import.meta.env.VITE_SPECIALS_COLLECTION_ID;
export const condimentsCollectionId = import.meta.env
  .VITE_CONDIMENTS_COLLECTION_ID;
export const cartItemsCollectionId = import.meta.env
  .VITE_CART_ITEMS_COLLECTION_ID;
export const ordersCollectionId = import.meta.env.VITE_ORDERS_COLLECTION_ID;

export const categories = [
  "burgers",
  "chicken",
  "chips",
  "fish",
  "doner kebabs",
  "chicken kebabs",
  "mixed meats kebabs",
  "jacket potato",
  "chicken curry",
  "pies",
  "savouries",
  "specials",
  "extras",
  "drinks",
];

export const standardRateLimit = 500;
export const highRateLimit = 1000;
export const defaultRateLimit = 25;
export const smallRateLimit = 250;

export const defaultTableSize = 10;
