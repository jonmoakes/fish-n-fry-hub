import { useSelector } from "react-redux";
import { selectChooseOptionsSelectors } from "../../store/choose-options/choose-options.slice";

const useGetChooseOptionsSelectors = () => {
  const {
    selectedItem,
    categoryItems,
    optionsPricesIsLoading,
    optionsPrices,
    optionsPricesError,
    canDocuments,
    canDocumentsError,
  } = useSelector(selectChooseOptionsSelectors);

  const {
    name,
    price,
    quantity,
    hasOptions,
    hasSizeOption,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    sizeOptionLargePrice,
    sizeChoice,
    hasCheeseSliceOption,
    cheeseSliceChoice,
    hasGratedCheeseOption,
    gratedCheeseChoice,
    hasDonerMeatOption,
    donerMeatChoice,
    hasSaladOption,
    saladChoice,
    hasSaucesOption,
    saucesChosen,
    hasSaltAndVinegarOption,
    saltAndVinegarChoice,
    hasChooseCanOption,
    chooseCanChoice,
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
    sizeOptionLargePrice,
    sizeChoice,
    hasCheeseSliceOption,
    cheeseSliceChoice,
    hasGratedCheeseOption,
    gratedCheeseChoice,
    hasDonerMeatOption,
    donerMeatChoice,
    hasSaladOption,
    saladChoice,
    hasSaucesOption,
    saucesChosen,
    donerMeatPrice,
    gratedCheesePrice,
    hasSaltAndVinegarOption,
    saltAndVinegarChoice,
    hasChooseCanOption,
    chooseCanChoice,
    canDocuments,
    canDocumentsError,
  };
};

export default useGetChooseOptionsSelectors;
