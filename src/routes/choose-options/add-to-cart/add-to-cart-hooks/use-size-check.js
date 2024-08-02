import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useSizeCheck = () => {
  const { hasSizeOption, sizeChoice } = useChooseOptionsVariables();

  const sizeCheckCorrect =
    !hasSizeOption || (hasSizeOption && sizeChoice) ? true : false;

  return { sizeCheckCorrect };
};

export default useSizeCheck;
