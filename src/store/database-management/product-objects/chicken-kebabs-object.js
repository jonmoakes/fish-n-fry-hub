export const chickenKebabsObject = (productToAdd) => {
  const { name, price, description, category, hasSaladOption } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
    hasSaladOption: !hasSaladOption ? false : true,
    hasSaucesOption: true,
    numberOfSaucesAvailable: 3,
    hasMeatsOption: true,
    numberOfMeatsAvailable: 1,
  };
};

// sauces should always be true and numberOfSaucesAvailable should always be 3 for chicken kebabs to match all of the other chicken kebabs.,
// number of meats for chicken kebab should always be 1 so hasMeatsOption should always be true.
