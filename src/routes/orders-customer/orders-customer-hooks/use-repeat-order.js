import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { setIdOfOrderToRepeat } from "../../../store/order-to-repeat/order-to-repeat.slice";

import { repeatOrderRoute } from "../../../strings/routes/routes-strings";

const useRepeatOrder = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const addPreviousOrderToCartAndGoToRepeatOrderPage = (value) => {
    dispatch(setIdOfOrderToRepeat(value));
    hamburgerHandlerNavigate(repeatOrderRoute);
  };

  return { addPreviousOrderToCartAndGoToRepeatOrderPage };
};

export default useRepeatOrder;
