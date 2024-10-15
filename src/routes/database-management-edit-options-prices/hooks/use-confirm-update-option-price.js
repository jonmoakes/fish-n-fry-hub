import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { updateOptionPriceAsync } from "../../../store/database-management/database-management.thunks";
import {
  confirmUpdateOptionPriceMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmUpdateOptionPrice = () => {
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmUpdateOptionPrice = (
    optionName,
    newOptionPrice,
    attributeKey
  ) => {
    confirmSwal(
      confirmUpdateOptionPriceMessage(optionName, newOptionPrice),
      "",
      imSureMessage,
      "",
      () => dispatch(updateOptionPriceAsync({ newOptionPrice, attributeKey })),
      null
    );
  };

  return { confirmUpdateOptionPrice };
};

export default useConfirmUpdateOptionPrice;
