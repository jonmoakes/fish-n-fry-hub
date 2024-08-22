import { getMultipleChoiceSelectionString } from "../get-multiple-choice-selection-string";

export const formatAddOnOption = (optionName, hasOption, choice) => {
  if (hasOption && choice && choice === "yes") {
    return `\n${optionName}:\n${choice}\n--------------------\n\n`;
  } else if (hasOption && (choice === undefined || choice === "no")) {
    return `\n${optionName}:\nno\n--------------------\n\n`;
  }
  return "";
};

export const formatMultipleOrSingleChoiceOption = (
  hasOption,
  numberOfChoicesAvailable,
  multipleChoices,
  singleChoice,
  optionNamePlural,
  optionNameSingular
) => {
  if (!hasOption) return "";

  if (numberOfChoicesAvailable > 1) {
    return `\n${optionNamePlural}:\n${getMultipleChoiceSelectionString(
      multipleChoices
    )}\n--------------------\n\n`;
  } else {
    return `\n${optionNameSingular}:\n${singleChoice}\n--------------------\n\n`;
  }
};

export const formatSimpleOption = (hasOption, optionValue, optionLabel) => {
  if (!hasOption || !optionValue) return "";
  return `\n${optionLabel}:\n${optionValue}\n--------------------\n\n`;
};
