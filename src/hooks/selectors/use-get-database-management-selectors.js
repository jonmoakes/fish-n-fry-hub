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
  } = useSelector(selectDatabaseManagementSelectors);

  return {
    databaseManagementIsLoading,
    addOrderResult,
    addOrderError,
    deleteUserCartItemsResult,
    deleteUserCartItemsError,
    formattedStringOfOrderForEmail,
  };
};

export default useGetDatabaseManagementSelectors;
