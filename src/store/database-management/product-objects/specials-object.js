export const specialsObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasCheeseSliceOption,
    hasDonerMeatOption,
    hasGratedCheeseOption,
    hasSaladOption,
    hasSaucesOption,
    numberOfSaucesAvailable,
    hasSizeOption,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
    hasMeatsOption,
    numberOfMeatsAvailable,
    sizeOptionMediumPrice,
    sizeOptionLargePrice,
    hasCondimentsOption,
    numberOfCondimentsAvailable,
    hasSaltAndVinegarOption,
    hasChooseCanOption,
    hasChoosePieOption,
  } = productToAdd;

  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
    hasCheeseSliceOption: !hasCheeseSliceOption ? false : true,
    hasDonerMeatOption: !hasDonerMeatOption ? false : true,
    hasGratedCheeseOption: !hasGratedCheeseOption ? false : true,
    hasSaladOption: !hasSaladOption ? false : true,
    hasSaucesOption: !hasSaucesOption ? false : true,
    numberOfSaucesAvailable: !numberOfSaucesAvailable
      ? null
      : Number(numberOfSaucesAvailable),
    hasSizeOption: !hasSizeOption ? false : true,
    sizeOptionMediumPrice: !sizeOptionMediumPrice
      ? null
      : Number(sizeOptionMediumPrice),
    sizeOptionLargePrice: !sizeOptionLargePrice
      ? null
      : Number(sizeOptionLargePrice),
    sizeOptionDoublePrice: !sizeOptionDoublePrice
      ? null
      : Number(sizeOptionDoublePrice),
    sizeOptionTriplePrice: !sizeOptionTriplePrice
      ? null
      : Number(sizeOptionTriplePrice),
    hasCondimentsOption: !hasCondimentsOption ? false : true,
    numberOfCondimentsAvailable: !numberOfCondimentsAvailable
      ? null
      : Number(numberOfCondimentsAvailable),
    hasSaltAndVinegarOption: !hasSaltAndVinegarOption ? false : true,
    hasChooseCanOption: !hasChooseCanOption ? false : true,
    hasChoosePieOption: !hasChoosePieOption ? false : true,
    hasMeatsOption: !hasMeatsOption ? false : true,
    numberOfMeatsAvailable: !hasMeatsOption
      ? null
      : Number(numberOfMeatsAvailable),
  };
};
