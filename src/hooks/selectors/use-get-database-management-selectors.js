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
  } = useSelector(selectDatabaseManagementSelectors);

  const { usersDocumentId, userToDeleteDocumentId } =
    dataToUpdateDocument ?? {};

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
  };
};

export default useGetDatabaseManagementSelectors;
