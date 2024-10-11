export const chickenCurryObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasSizeOption,
    sizeOptionLargePrice,
  } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
    hasSizeOption: !hasSizeOption ? false : true,
    sizeOptionLargePrice: !sizeOptionLargePrice
      ? null
      : Number(sizeOptionLargePrice),
  };
};
