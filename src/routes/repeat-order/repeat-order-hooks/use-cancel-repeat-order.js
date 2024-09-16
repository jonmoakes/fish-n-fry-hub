import { useDispatch } from "react-redux";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetOrderToRepeatState } from "../../../store/order-to-repeat/order-to-repeat.slice";

import { ordersCustomerRoute } from "../../../strings/routes/routes-strings";

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
      "cancel repeat order and return to your orders table?",
      "",
      "yes, return",
      "",
      confirmResult,
      null
    );
  };

  return { cancelRepeatOrder };
};

export default useCancelRepeatOrder;
