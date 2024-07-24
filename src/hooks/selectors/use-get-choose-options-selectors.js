import { useSelector } from "react-redux";
import { selectChooseOptionsSelectors } from "../../store/choose-options/choose-options.slice";

const useGetChooseOptionsSelectors = () => {
  const {
    selectedItem,
    categoryItems,
    optionsPricesIsLoading,
    optionsPrices,
    optionsPricesError,
  } = useSelector(selectChooseOptionsSelectors);

  const {
    name,
    price,
    quantity,
    hasOptions,
    hasSizeOption,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    chosenSize,
    hasCheeseSliceOption,
    cheeseSliceChoice,
    hasGratedCheeseOption,
    gratedCheeseChoice,
    hasDonerMeatOption,
    donerMeatChoice,
    hasSaladOption,
    saladChoice,
    hasSaucesOption,
    saucesChoice,
  } = selectedItem ?? {};

  const { gratedCheesePrice, donerMeatPrice } = optionsPrices ?? {};

  return {
    selectedItem,
    categoryItems,
    optionsPricesIsLoading,
    optionsPrices,
    optionsPricesError,
    name,
    price,
    quantity,
    hasOptions,
    hasSizeOption,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    chosenSize,
    hasCheeseSliceOption,
    cheeseSliceChoice,
    hasGratedCheeseOption,
    gratedCheeseChoice,
    hasDonerMeatOption,
    donerMeatChoice,
    hasSaladOption,
    saladChoice,
    hasSaucesOption,
    saucesChoice,
    donerMeatPrice,
    gratedCheesePrice,
  };
};

export default useGetChooseOptionsSelectors;
