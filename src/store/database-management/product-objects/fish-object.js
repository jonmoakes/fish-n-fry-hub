export const fishObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasSaltAndVinegarOption,
    hasSizeOption,
    sizeOptionLargePrice,
  } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
    hasSaltAndVinegarOption: !hasSaltAndVinegarOption ? false : true,
    hasSizeOption: !hasSizeOption ? false : true,
    sizeOptionLargePrice: !sizeOptionLargePrice
      ? null
      : Number(sizeOptionLargePrice),
  };
};
