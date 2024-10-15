import { useSelector } from "react-redux";
import { selectDatabaseManagementSelectors } from "../../store/database-management/database-management.slice";

const useGetDatabaseManagementSelectors = () => {
  const {
    databaseManagementIsLoading,
    addOrderResult,
    addOrderError,
    deleteUserCartItemsResult,
    deleteUserCartItemsError,
    formattedStringOfOrderForEmail,
    errorIdFromEmail,
    dataToUpdateDocument,
    deleteDocumentResult,
    deleteDocumentError,
    productToEdit,
    updateAttributeResult,
    updateAttributeError,
    productToAdd,
    createProductResult,
    createProductError,
    getOptionsPricesResult,
    optionsPrices,
    getOptionsPricesError,
    updateOptionPriceResult,
    updateOptionPriceError,
  } = useSelector(selectDatabaseManagementSelectors);

  const {
    usersDocumentId,
    userToDeleteDocumentId,
    customerName,
    customerEmail,
    customerId,
    orderDetails,
  } = dataToUpdateDocument ?? {};

  const { category } = productToAdd ?? {};

  return {
    databaseManagementIsLoading,
    addOrderResult,
    addOrderError,
    deleteUserCartItemsResult,
    deleteUserCartItemsError,
    formattedStringOfOrderForEmail,
    errorIdFromEmail,
    dataToUpdateDocument,
    deleteDocumentResult,
    deleteDocumentError,
    usersDocumentId,
    userToDeleteDocumentId,
    customerName,
    customerEmail,
    customerId,
    orderDetails,
    productToEdit,
    updateAttributeResult,
    updateAttributeError,
    productToAdd,
    category,
    createProductResult,
    createProductError,
    getOptionsPricesResult,
    optionsPrices,
    getOptionsPricesError,
    updateOptionPriceResult,
    updateOptionPriceError,
  };
};

export default useGetDatabaseManagementSelectors;
