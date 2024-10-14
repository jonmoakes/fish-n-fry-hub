export const savouriesObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasSaltAndVinegarOption,
    hasSaucesOption,
    numberOfSaucesAvailable,
    hasSizeOption,
    sizeOptionLargePrice,
  } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
    hasSaltAndVinegarOption: !hasSaltAndVinegarOption ? false : true,
    hasSaucesOption: !hasSaucesOption ? false : true,
    numberOfSaucesAvailable: !numberOfSaucesAvailable
      ? null
      : Number(numberOfSaucesAvailable),
    hasSizeOption: !hasSizeOption ? false : true,
    sizeOptionLargePrice: !sizeOptionLargePrice
      ? null
      : Number(sizeOptionLargePrice),
  };
};
