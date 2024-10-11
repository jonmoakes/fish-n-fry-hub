export const burgersObject = (productToAdd) => {
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
    sizeOptionDoublePrice: !sizeOptionDoublePrice
      ? null
      : Number(sizeOptionDoublePrice),
    sizeOptionTriplePrice: !sizeOptionTriplePrice
      ? null
      : Number(sizeOptionTriplePrice),
  };
};
