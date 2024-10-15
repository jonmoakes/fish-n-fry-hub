import { useEffect } from "react";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { useDispatch } from "react-redux";
import { fetchOptionsPricesAsync } from "../../../store/database-management/database-management.thunks";

const useGetOptionsPricesThunkUseEffect = () => {
  const { getOptionsPricesError, getOptionsPricesResult } =
    useGetDatabaseManagementSelectors();

  const dispatch = useDispatch();

  useEffect(() => {
    if (getOptionsPricesError || getOptionsPricesResult) return;
    dispatch(fetchOptionsPricesAsync());
  }, [dispatch, getOptionsPricesError, getOptionsPricesResult]);
};

export default useGetOptionsPricesThunkUseEffect;
