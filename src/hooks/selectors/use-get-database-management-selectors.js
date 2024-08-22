import { useSelector } from "react-redux";
import { selectDatabaseManagementSelectors } from "../../store/database-management/database-management.slice";

const useGetDatabaseManagementSelectors = () => {
  const {
    databaseManagementIsLoading,
    addOrderResult,
    addOrderError,
    deleteUserCartItemsResult,
    deleteUserCartItemsError,
  } = useSelector(selectDatabaseManagementSelectors);

  return {
    databaseManagementIsLoading,
    addOrderResult,
    addOrderError,
    deleteUserCartItemsResult,
    deleteUserCartItemsError,
  };
};

export default useGetDatabaseManagementSelectors;
