import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const usePieCheck = () => {
  const { hasChoosePieOption, pieChoice } = useChooseOptionsVariables();

  const pieCheckCorrect =
    !hasChoosePieOption || (hasChoosePieOption && pieChoice) ? true : false;

  return { pieCheckCorrect };
};

export default usePieCheck;
