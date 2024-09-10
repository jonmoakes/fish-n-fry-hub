import { useSelector } from "react-redux";

import { selectIncomeDataSelectors } from "../../store/income-data/income-data.slice";

const useGetIncomeDataSelectors = () => {
  const { incomeDataIsLoading, incomeData, sortedIncomeData, incomeDataError } =
    useSelector(selectIncomeDataSelectors);

  return {
    incomeDataIsLoading,
    incomeData,
    sortedIncomeData,
    incomeDataError,
  };
};

export default useGetIncomeDataSelectors;
