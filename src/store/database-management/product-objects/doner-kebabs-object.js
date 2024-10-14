export const donerKebabsObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasSaladOption,
    hasSaucesOption,
    numberOfSaucesAvailable,
  } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
    hasSaladOption: !hasSaladOption ? false : true,
    hasSaucesOption: !hasSaucesOption ? false : true,
    numberOfSaucesAvailable: !numberOfSaucesAvailable
      ? null
      : Number(numberOfSaucesAvailable),
  };
};
