export const chickenObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasSaltAndVinegarOption,
    hasChooseCanOption,
    hasSaladOption,
    hasSaucesOption,
    numberOfSaucesAvailable,
  } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
    hasSaltAndVinegarOption: !hasSaltAndVinegarOption ? false : true,
    hasChooseCanOption: !hasChooseCanOption ? false : true,
    hasSaladOption: !hasSaladOption ? false : true,
    hasSaucesOption: !hasSaucesOption ? false : true,
    numberOfSaucesAvailable: !numberOfSaucesAvailable
      ? null
      : Number(numberOfSaucesAvailable),
  };
};
