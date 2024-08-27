import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";
import useChooseCondimentsFunctions from "../../condiments/condiments-hooks/use-choose-condiments-functions";

const useCondimentsCheck = () => {
  const { numberOfCondimentsCheckboxesChosen } = useChooseCondimentsFunctions();
  const {
    hasCondimentsOption,
    numberOfCondimentsAvailable,
    singleCondimentChosen,
  } = useChooseOptionsVariables();

  const hasSingleCondimentOption = numberOfCondimentsAvailable === 1;
  const hasMultipleCondimentsOption = numberOfCondimentsAvailable === 2;
  const numberOfCondimentsChosen = numberOfCondimentsCheckboxesChosen();

  const condimentsCheck = () => {
    if (!hasCondimentsOption) {
      return true;
    }

    if (hasCondimentsOption) {
      if (
        (hasSingleCondimentOption && singleCondimentChosen) ||
        (hasMultipleCondimentsOption &&
          numberOfCondimentsChosen === numberOfCondimentsAvailable)
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const condimentsSelectionCorrect = condimentsCheck();

  return { condimentsSelectionCorrect };
};

export default useCondimentsCheck;
