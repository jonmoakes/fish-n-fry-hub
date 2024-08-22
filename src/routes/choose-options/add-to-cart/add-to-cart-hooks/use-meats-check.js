import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";
import useChooseMeatsFunctions from "../../meats/meats-hooks/use-choose-meats-functions";

const useMeatsCheck = () => {
  const { numberOfMeatsCheckboxesChosen } = useChooseMeatsFunctions();
  const { hasMeatsOption, numberOfMeatsAvailable, singleMeatChosen } =
    useChooseOptionsVariables();

  const hasSingleMeatOption = numberOfMeatsAvailable === 1;
  const hasMultipleMeatsOption = numberOfMeatsAvailable === 2;
  const numberOfMeatsChosen = numberOfMeatsCheckboxesChosen();

  const meatsCheck = () => {
    if (!hasMeatsOption) {
      return true;
    }

    if (hasMeatsOption) {
      if (
        (hasSingleMeatOption && singleMeatChosen) ||
        (hasMultipleMeatsOption &&
          numberOfMeatsChosen === numberOfMeatsAvailable)
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const meatsSelectionCorrect = meatsCheck();

  return { meatsSelectionCorrect };
};

export default useMeatsCheck;
