import { replacePartOfString } from "../replace-part-of-string";
import {
  formatSimpleOption,
  formatAddOnOption,
  formatMultipleOrSingleChoiceOption,
} from "./format-order-string-functions";

export const formatOrderString = (cartItem) => {
  const {
    name,
    hasSizeOption,
    sizeChoice,
    hasCheeseSliceOption,
    cheeseSliceChoice,
    hasDonerMeatOption,
    donerMeatChoice,
    hasGratedCheeseOption,
    gratedCheeseChoice,
    hasSaucesOption,
    numberOfSaucesAvailable,
    saucesChosen,
    singleSauceChosen,
    hasCondimentsOption,
    numberOfCondimentsAvailable,
    condimentsChosen,
    singleCondimentChosen,
    hasMeatsOption,
    numberOfMeatsAvailable,
    meatsChosen,
    singleMeatChosen,
    hasChooseCanOption,
    canChoice,
    hasChoosePieOption,
    pieChoice,
    hasSaladOption,
    saladChoice,
    hasSaltAndVinegarOption,
    saltAndVinegarChoice,
    specialInstructions,
    priceWithOptionsAndQuantity,
    quantity,
  } = cartItem;

  let itemString = `\n\n****************************:\n${name}:\n--------------------\n\n`;

  itemString += formatSimpleOption(hasChoosePieOption, pieChoice, "Pie");
  itemString += formatSimpleOption(hasSizeOption, sizeChoice, "Size");

  itemString += formatAddOnOption(
    "Cheese Slice",
    hasCheeseSliceOption,
    cheeseSliceChoice
  );
  itemString += formatAddOnOption(
    "Grated Cheese",
    hasGratedCheeseOption,
    gratedCheeseChoice
  );
  itemString += formatAddOnOption(
    "Doner Meat",
    hasDonerMeatOption,
    donerMeatChoice
  );
  itemString += formatAddOnOption("Salad", hasSaladOption, saladChoice);

  itemString += formatMultipleOrSingleChoiceOption(
    hasSaucesOption,
    numberOfSaucesAvailable,
    saucesChosen,
    singleSauceChosen,
    "Sauces Chosen",
    "Sauce"
  );

  itemString += formatMultipleOrSingleChoiceOption(
    hasCondimentsOption,
    numberOfCondimentsAvailable,
    condimentsChosen,
    singleCondimentChosen,
    "Condiments Chosen",
    "Condiment"
  );

  itemString += formatMultipleOrSingleChoiceOption(
    hasMeatsOption,
    numberOfMeatsAvailable,
    meatsChosen,
    singleMeatChosen,
    "Meats Chosen",
    "Meat"
  );

  itemString += formatSimpleOption(
    hasSaltAndVinegarOption,
    saltAndVinegarChoice,
    "Salt & Vinegar"
  );

  if (hasChooseCanOption) {
    itemString += `\ncan:\n${replacePartOfString(
      canChoice,
      "( can )",
      ""
    )}\n--------------------\n\n`;
  }

  itemString += formatSimpleOption(
    true,
    specialInstructions,
    "Special Instructions"
  );

  itemString += `
Quantity:\n${quantity}\n--------------------\n\n
Total Price:\n£${(priceWithOptionsAndQuantity / 100).toFixed(
    2
  )}\n--------------------\n\n
____________________________
    `;

  return itemString;
};
