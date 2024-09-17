import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { setIdOfOrderToRepeat } from "../../../store/order-to-repeat/order-to-repeat.slice";

import { repeatOrderRoute } from "../../../strings/routes/routes-strings";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { confirmReorderMessage } from "../../../strings/confirms/confirms-strings";

const useGetOrderAndGoToRepeatOrderPage = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();

  const getOrderAndGoToRepeatOrderPage = (value) => {
    const confirmResult = () => {
      dispatch(setIdOfOrderToRepeat(value));
      hamburgerHandlerNavigate(repeatOrderRoute);
    };

    confirmSwal(confirmReorderMessage, "", "yes", "", confirmResult, null);
  };

  return { getOrderAndGoToRepeatOrderPage };
};

export default useGetOrderAndGoToRepeatOrderPage;
