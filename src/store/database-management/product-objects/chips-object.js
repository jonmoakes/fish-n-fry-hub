export const chipsObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasSaucesOption,
    numberOfSaucesAvailable,
    hasCondimentsOption,
    numberOfCondimentsAvailable,
    hasSizeOption,
    sizeOptionLargePrice,
    hasSaltAndVinegarOption,
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
    hasCondimentsOption: !hasCondimentsOption ? false : true,
    numberOfCondimentsAvailable: !numberOfCondimentsAvailable
      ? null
      : Number(numberOfCondimentsAvailable),
    hasSizeOption: !hasSizeOption ? false : true,
    sizeOptionLargePrice: !sizeOptionLargePrice
      ? null
      : Number(sizeOptionLargePrice),
    hasSaltAndVinegarOption: !hasSaltAndVinegarOption ? false : true,
  };
};
