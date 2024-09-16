import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { setIdOfOrderToRepeat } from "../../../store/order-to-repeat/order-to-repeat.slice";

import { repeatOrderRoute } from "../../../strings/routes/routes-strings";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

const useGetOrderAndGoToRepeatOrderPage = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const getOrderAndGoToRepeatOrderPage = (value) => {
    const confirmResult = () => {
      dispatch(setIdOfOrderToRepeat(value));
      hamburgerHandlerNavigate(repeatOrderRoute);
    };

    confirmSwal(
      "do you want to reorder this meal? You will have the chance to review and confirm before purchasing.",
      "",
      "yes",
      "",
      confirmResult,
      null
    );
  };

  return { getOrderAndGoToRepeatOrderPage };
};

export default useGetOrderAndGoToRepeatOrderPage;
