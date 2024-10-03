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
  } = useSelector(selectDatabaseManagementSelectors);

  const {
    usersDocumentId,
    userToDeleteDocumentId,
    customerName,
    customerEmail,
    customerId,
    orderDetails,
  } = dataToUpdateDocument ?? {};

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
  };
};

export default useGetDatabaseManagementSelectors;
