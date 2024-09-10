import { useMemo } from "react";

import useGetIncomeDataSelectors from "../../../hooks/selectors/use-get-income-data-selectors";

import INCOME_TABLE_COLUMNS from "../income-table-columns";

import { defaultTableSize } from "../../../constants/constants";

const useIncomeVariables = () => {
  const { incomeDataIsLoading, sortedIncomeData, incomeDataError } =
    useGetIncomeDataSelectors();

  const incomeDataPageSizeFromLocalStorage = localStorage.getItem(
    "incomeDataTablePageSize"
  );
  const data = useMemo(
    () => (sortedIncomeData && sortedIncomeData.length ? sortedIncomeData : []),
    [sortedIncomeData]
  );
  const columns = useMemo(() => INCOME_TABLE_COLUMNS, []);

  const initialState = useMemo(
    () => ({
      sortBy: [],
      pageSize: incomeDataPageSizeFromLocalStorage
        ? Number(incomeDataPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [incomeDataPageSizeFromLocalStorage]
  );

  return {
    incomeDataIsLoading,
    sortedIncomeData,
    incomeDataError,
    columns,
    initialState,
    data,
  };
};

export default useIncomeVariables;
