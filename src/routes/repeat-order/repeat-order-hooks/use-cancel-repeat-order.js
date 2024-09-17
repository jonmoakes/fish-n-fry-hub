import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetOrderToRepeatState } from "../../../store/order-to-repeat/order-to-repeat.slice";

import { ordersCustomerRoute } from "../../../strings/routes/routes-strings";
import { confirmCancelRepeatOrderMessage } from "../../../strings/confirms/confirms-strings";
import { yesReturnMessage } from "../../../strings/info/info-strings";

const useCancelRepeatOrder = () => {
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const cancelRepeatOrder = () => {
    const confirmResult = () => {
      dispatch(resetOrderToRepeatState());
      hamburgerHandlerNavigate(ordersCustomerRoute);
    };

    confirmSwal(
      confirmCancelRepeatOrderMessage,
      "",
      yesReturnMessage,
      "",
      confirmResult,
      null
    );
  };

  return { cancelRepeatOrder };
};

export default useCancelRepeatOrder;
