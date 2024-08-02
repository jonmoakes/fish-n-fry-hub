import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useCalculateTotalPrice = () => {
  const {
    price,
    quantity,
    sizeChoice,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    sizeOptionMediumPrice,
    sizeOptionLargePrice,
    gratedCheeseChoice,
    gratedCheesePrice,
    donerMeatChoice,
    donerMeatPrice,
  } = useChooseOptionsVariables();

  const sizeChoicePrice = () => {
    switch (sizeChoice) {
      case "single":
        return price;
      case "double":
        return price + sizeOptionDoublePrice;
      case "triple":
        return price + sizeOptionTriplePrice;
      case "medium":
        return price + sizeOptionMediumPrice;
      case "large":
        return price + sizeOptionLargePrice;
      default:
        return price;
    }
  };

  const chosenGratedCheesePrice = () => {
    switch (gratedCheeseChoice) {
      case "yes":
        return gratedCheesePrice;
      case "no":
        return 0;
      default:
        return 0;
    }
  };

  const chosenDonerMeatPrice = () => {
    switch (donerMeatChoice) {
      case "yes":
        return donerMeatPrice;
      case "no":
        return 0;
      default:
        return 0;
    }
  };

  const totalPriceWithOptionsAndQuantity =
    (sizeChoicePrice() + chosenGratedCheesePrice() + chosenDonerMeatPrice()) *
    Number(quantity);

  return { totalPriceWithOptionsAndQuantity };
};

export default useCalculateTotalPrice;
