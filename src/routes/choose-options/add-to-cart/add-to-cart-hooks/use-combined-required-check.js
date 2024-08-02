import useCanCheck from "./use-can-check";
import useCondimentsCheck from "./use-condiments-check";
import useMeatsCheck from "./use-meats-check";
import usePieCheck from "./use-pie-check";
import useSaltAndVinegarCheck from "./use-salt-and-vinegar-check";
import useSaucesCheck from "./use-sauces-check";
import useSizeCheck from "./use-size-check";

const useCombinedRequiredCheck = () => {
  const { canCheckCorrect } = useCanCheck();
  const { condimentsSelectionCorrect } = useCondimentsCheck();
  const { meatsSelectionCorrect } = useMeatsCheck();
  const { pieCheckCorrect } = usePieCheck();
  const { saltAndVinegarCheckCorrect } = useSaltAndVinegarCheck();
  const { saucesSelectionCorrect } = useSaucesCheck();
  const { sizeCheckCorrect } = useSizeCheck();

  //   console.log(saucesSelectionCorrect);

  const requiredChecksPassed =
    canCheckCorrect &&
    condimentsSelectionCorrect &&
    meatsSelectionCorrect &&
    pieCheckCorrect &&
    saltAndVinegarCheckCorrect &&
    saucesSelectionCorrect &&
    sizeCheckCorrect &&
    saucesSelectionCorrect
      ? true
      : false;

  return { requiredChecksPassed };
};

export default useCombinedRequiredCheck;
