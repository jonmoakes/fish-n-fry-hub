import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { updateOptionPriceAsync } from "../../../store/database-management/database-management.thunks";

const useConfirmUpdateOptionPrice = () => {
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmUpdateOptionPrice = (
    optionName,
    newOptionPrice,
    attributeKey
  ) => {
    confirmSwal(
      `are you sure you want to update the price of your ${optionName} option to be £${(
        newOptionPrice / 100
      ).toFixed(2)}`,
      "",
      "yes",
      "",
      () => dispatch(updateOptionPriceAsync({ newOptionPrice, attributeKey })),
      null
    );
  };

  return { confirmUpdateOptionPrice };
};

export default useConfirmUpdateOptionPrice;
