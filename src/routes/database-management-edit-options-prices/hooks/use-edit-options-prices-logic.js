import { useState } from "react";
import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";

const useEditOptionsPricesLogic = () => {
  const {
    databaseManagementIsLoading,
    getOptionsPricesError,
    optionsPrices,
    updateOptionPriceResult,
    updateOptionPriceError,
  } = useGetDatabaseManagementSelectors();

  const [newPrice, setNewPrice] = useState({
    newDonerMeatPrice: "",
    newGratedCheesePrice: "",
  });

  const { donerMeatPrice, gratedCheesePrice } = optionsPrices ?? {};
  const { newDonerMeatPrice, newGratedCheesePrice } = newPrice ?? {};

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewPrice({ ...newPrice, [name]: value });
  };

  const resetInputs = () => {
    setNewPrice({ newDonerMeatPrice: "", newGratedCheesePrice: "" });
  };

  return {
    databaseManagementIsLoading,
    getOptionsPricesError,
    donerMeatPrice,
    gratedCheesePrice,
    newDonerMeatPrice,
    newGratedCheesePrice,
    handleChange,
    updateOptionPriceResult,
    updateOptionPriceError,
    resetInputs,
  };
};

export default useEditOptionsPricesLogic;
