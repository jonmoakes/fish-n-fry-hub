import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";
import useChooseSaucesFunctions from "../../sauces/sauces-hooks/use-choose-sauces-functions";

const useSaucesCheck = () => {
  const { numberOfSaucesCheckboxesChosen } = useChooseSaucesFunctions();
  const { numberOfSaucesAvailable, hasSaucesOption, singleSauceChosen } =
    useChooseOptionsVariables();

  const hasSingleSauceOption = numberOfSaucesAvailable === 1;
  const hasMultipleSaucesOption = numberOfSaucesAvailable === 3;
  const numberOfSaucesChosen = numberOfSaucesCheckboxesChosen();

  const saucesCheck = () => {
    if (!hasSaucesOption) {
      return true;
    }

    if (hasSaucesOption) {
      if (
        (hasSingleSauceOption && singleSauceChosen) ||
        (hasMultipleSaucesOption &&
          numberOfSaucesChosen >= 1 &&
          numberOfSaucesChosen <= numberOfSaucesAvailable)
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const saucesSelectionCorrect = saucesCheck();

  return { saucesSelectionCorrect };
};

export default useSaucesCheck;
