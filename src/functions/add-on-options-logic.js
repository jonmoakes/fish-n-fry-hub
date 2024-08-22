export const hasAnyAddOnOptionBeenChosen = (
  cheeseSliceChoice,
  donerMeatChoice,
  gratedCheeseChoice,
  saladChoice
) => {
  return (
    (cheeseSliceChoice ||
      donerMeatChoice ||
      gratedCheeseChoice ||
      saladChoice) &&
    true
  );
};

export const hasAnyAddOnOptionButNoneChosen = (
  hasCheeseSliceOption,
  hasDonerMeatOption,
  hasGratedCheeseOption,
  hasSaladOption,
  cheeseSliceChoice,
  donerMeatChoice,
  gratedCheeseChoice,
  saladChoice
) => {
  return (
    (hasCheeseSliceOption ||
      hasDonerMeatOption ||
      hasGratedCheeseOption ||
      hasSaladOption) &&
    !cheeseSliceChoice &&
    !donerMeatChoice &&
    !gratedCheeseChoice &&
    !saladChoice
  );
};
