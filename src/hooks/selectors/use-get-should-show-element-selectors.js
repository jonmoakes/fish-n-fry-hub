import { useSelector } from "react-redux";

import { selectShouldShowElementSelectors } from "../../store/should-show-element/should-show-element.slice";

const useGetShouldShowElementSelectors = () => {
  const { shouldShowElement, shouldShowSecondElement, shouldShowThirdElement } =
    useSelector(selectShouldShowElementSelectors);

  return { shouldShowElement, shouldShowSecondElement, shouldShowThirdElement };
};
export default useGetShouldShowElementSelectors;
