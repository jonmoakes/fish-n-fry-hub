import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useCanCheck = () => {
  const { hasChooseCanOption, canChoice } = useChooseOptionsVariables();

  const canCheckCorrect =
    !hasChooseCanOption || (hasChooseCanOption && canChoice) ? true : false;

  return { canCheckCorrect };
};

export default useCanCheck;
