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

  const hasAnyAddOnOption =
    cheeseSliceChoice || donerMeatChoice || gratedCheeseChoice || saladChoice
      ? true
      : false;

  const hasAnyAddOnOptionButNoneChosen =
    hasCheeseSliceOption ||
    hasDonerMeatOption ||
    hasGratedCheeseOption ||
    (hasSaladOption &&
      !cheeseSliceChoice &&
      !donerMeatChoice &&
      gratedCheeseChoice &&
      !saladChoice)
      ? true
      : false;

  const multipleChoiceSelection = (optionObject) => {
    const safeObj = optionObject ?? {};
    const choicesChosen = Object.keys(safeObj).filter((key) => safeObj[key]);
    return choicesChosen.join(`,\n`);
  };

  return {
    hasAnyAddOnOption,
    hasAnyAddOnOptionButNoneChosen,
    multipleChoiceSelection,
  };
};

export default useCheckoutItemHooks;
