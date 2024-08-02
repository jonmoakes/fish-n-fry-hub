import {
  listDocumentsByQueryOrSearch,
  listDocumentsInACollection,
  manageDatabaseDocument,
} from "../../utils/appwrite/appwrite-functions";

import {
  databaseId,
  optionsPricesCollectionId,
  optionsPricesDocumentId,
  smallRateLimit,
} from "../../constants/constants";

const transformDocuments = (documents) => {
  if (!documents.length) {
    return [];
  }
  return documents.map(({ $id, name }) => ({
    $id,
    name,
  }));
};

// isSearch is necessary as in some products, w eneed to get the can documents from the drinks collection, removing the bottles documents
// because it uses the same thunk, we pass the values even if not needed for clarity.
export const getRetrievedDocuments = async (
  isSearch,
  searchIndex,
  searchValue,
  collectionId
) => {
  let documents;

  if (isSearch) {
    if (searchIndex === null || searchValue === null) {
      throw new Error(
        "Search index and value must be provided when isSearch is true"
      );
    }

    const retrievedDocuments = await listDocumentsByQueryOrSearch(
      databaseId,
      collectionId,
      searchIndex,
      searchValue,
      true,
      null
    );
    documents = retrievedDocuments.documents;
  } else {
    const retrievedDocuments = await listDocumentsInACollection(
      databaseId,
      collectionId,
      smallRateLimit
    );
    documents = retrievedDocuments.documents;
  }

  // get just the $id and name from the documents
  return transformDocuments(documents);
};

export const fetchOptionPrice = async (priceKey) => {
  try {
    const getOptionsPrices = await manageDatabaseDocument(
      "get",
      databaseId,
      optionsPricesCollectionId,
      optionsPricesDocumentId
    );

    //gets whichever object key and value that is passed to the function
    // ie gets the donerMeatPrice object value when 'donerMeatPrice' is passed as the key etc.
    return getOptionsPrices[priceKey];
  } catch (error) {
    throw new Error(error.message);
  }
};
