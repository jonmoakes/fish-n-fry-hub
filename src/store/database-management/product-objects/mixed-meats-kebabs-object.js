export const mixedMeatsKebabsKebabsObject = (productToAdd) => {
  const {
    name,
    price,
    description,
    category,
    hasSaladOption,
    hasMeatsOption,
    numberOfMeatsAvailable,
  } = productToAdd;
  return {
    name: name.toLowerCase(),
    price: Number(price),
    description: description ? description.toLowerCase() : "",
    category: category.toLowerCase(),
    hasSaladOption: !hasSaladOption ? false : true,
    hasSaucesOption: true,
    numberOfSaucesAvailable: 3,
    hasMeatsOption: !hasMeatsOption ? false : true,
    numberOfMeatsAvailable: !hasMeatsOption
      ? null
      : Number(numberOfMeatsAvailable),
  };
};

// sauces should always be true and numberOfSaucesAvailable should always be 3 for mixed kebabs to match all of the other mixed kebabs.,
// number of meats for mixed kebabs should be null  if !hasMeatsOption. This will mean the product has all 3 meats in the product and there should be a description in the product name to make the customer aware of this.
// if hasMeatsOption, the number of meats available should always be 2. This is what the value of Number(numberOfMeatsAvailable) should be. This will trigger the app logic to show all 3 meat options as a choice as they can select 2 out of the 3.
