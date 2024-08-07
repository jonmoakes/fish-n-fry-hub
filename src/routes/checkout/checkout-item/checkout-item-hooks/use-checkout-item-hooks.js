const useCheckoutItemHooks = (cartItemObject) => {
  const {
    cheeseSliceChoice,
    donerMeatChoice,
    gratedCheeseChoice,
    saladChoice,
    hasCheeseSliceOption,
    hasDonerMeatOption,
    hasGratedCheeseOption,
    hasSaladOption,
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

  const multipleChoiceSelection = (optionObject) => {
    const safeObj = optionObject ?? {};
    const choicesChosen = Object.keys(safeObj).filter((key) => safeObj[key]);
    return choicesChosen.join(`,\n`);
  };

  return {
    hasAnyAddOnOptionBeenChosen,
    hasAnyAddOnOptionButNoneChosen,
    multipleChoiceSelection,
  };
};

export default useCheckoutItemHooks;
