export const extrasObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasSaucesOption,
    numberOfSaucesAvailable,
    hasSizeOption,
    sizeOptionMediumPrice,
    sizeOptionLargePrice,
  } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
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
  };
};
