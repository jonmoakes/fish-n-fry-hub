import { useSelector } from "react-redux";

import { selectCardInputResultSelectors } from "../../store/card-input-result/card-input-result.slice";

const useGetCardInputResultSelectors = () => {
  const { cardInputResult } = useSelector(selectCardInputResultSelectors);

  const { error, warning, showPrePayButton } = cardInputResult;

  return { cardInputResult, error, warning, showPrePayButton };
};

export default useGetCardInputResultSelectors;
