import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useElements, useStripe } from "@stripe/react-stripe-js";

import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import useGetOrderToRepeatSelectors from "../../../hooks/selectors/use-get-order-to-repeat-selectors";
import { getClientSecretAsync } from "../../../store/handle-payment/handle-payment.thunks";

import { stripeSecretKey } from "../../../constants/constants";
import { getOrderTotalBasedOnRoute } from "../../../functions/get-order-total-based-on-route";

const useGetClientSecretThunk = () => {
  const { grandTotal } = useGetCartItemsSelectors();
  const { repeatOrderGrandTotal } = useGetOrderToRepeatSelectors();

  const location = useLocation();
  const path = location.pathname;

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const orderTotal = getOrderTotalBasedOnRoute(
    path,
    grandTotal,
    repeatOrderGrandTotal
  );

  const getClientSecretThunk = () => {
    if (!stripe || !elements) return;

    dispatch(getClientSecretAsync({ stripeSecretKey, orderTotal }));
  };

  return { getClientSecretThunk };
};

export default useGetClientSecretThunk;
