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
export const drinksCollectionId = import.meta.env.VITE_DRINKS_COLLECTIONS_ID;

export const categories = [
  "burgers",
  "chicken",
  "chicken curry",
  "chips",
  "drinks",
];

export const standardRateLimit = 500;
export const highRateLimit = 1000;
export const defaultRateLimit = 25;
export const smallRateLimit = 250;
