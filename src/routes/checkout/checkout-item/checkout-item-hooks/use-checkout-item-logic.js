const useCheckoutItemLogic = (cartItemObject) => {
  const {
    cheeseSliceChoice,
    donerMeatChoice,
    gratedCheeseChoice,
    saladChoice,
    hasCheeseSliceOption,
    hasDonerMeatOption,
    hasGratedCheeseOption,
    hasSaladOption,
    hasSizeOption,
    hasSaucesOption,
    hasSaltAndVinegarOption,
    hasCondimentsOption,
    hasChoosePieOption,
    hasChooseCanOption,
  } = cartItemObject ?? {};

  const hasAnyAddOnOptionBeenChosen =
    (cheeseSliceChoice ||
      donerMeatChoice ||
      gratedCheeseChoice ||
      saladChoice) &&
    true;

  const hasAnyAddOnOptionButNoneChosen =
    (hasCheeseSliceOption ||
      hasDonerMeatOption ||
      hasGratedCheeseOption ||
      hasSaladOption) &&
    !cheeseSliceChoice &&
    !donerMeatChoice &&
    !gratedCheeseChoice &&
    !saladChoice;

  const hasAnyOption =
    (hasSizeOption ||
      hasCheeseSliceOption ||
      hasDonerMeatOption ||
      hasGratedCheeseOption ||
      hasSaladOption ||
      hasSaucesOption ||
      hasSaltAndVinegarOption ||
      hasCondimentsOption ||
      hasChoosePieOption ||
      hasChooseCanOption) &&
    true;

  return {
    hasAnyAddOnOptionBeenChosen,
    hasAnyAddOnOptionButNoneChosen,
    hasAnyOption,
  };
};

export default useCheckoutItemLogic;
