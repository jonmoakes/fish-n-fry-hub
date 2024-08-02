import useChooseOptionsVariables from "../../choose-options-hooks/use-choose-options-variables";

const useSaltAndVinegarCheck = () => {
  const { hasSaltAndVinegarOption, saltAndVinegarChoice } =
    useChooseOptionsVariables();

  const saltAndVinegarCheckCorrect =
    !hasSaltAndVinegarOption ||
    (hasSaltAndVinegarOption && saltAndVinegarChoice)
      ? true
      : false;

  return { saltAndVinegarCheckCorrect };
};

export default useSaltAndVinegarCheck;
