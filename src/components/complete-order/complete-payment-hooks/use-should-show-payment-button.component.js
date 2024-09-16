import { useLocation } from "react-router-dom";

import useGetCardInputResultSelectors from "../../../hooks/selectors/use-get-card-input-result-selectors";
import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";

import { getOrderTotalBasedOnRoute } from "../../../functions/get-order-total-based-on-route";
import useGetOrderToRepeatSelectors from "../../../hooks/selectors/use-get-order-to-repeat-selectors";

const useShouldShowPaymentButton = () => {
  const { showPrePayButton } = useGetCardInputResultSelectors();
  const { client_secret } = useGetHandlePaymentSelectors();
  const { grandTotal } = useGetCartItemsSelectors();
  const { repeatOrderGrandTotal } = useGetOrderToRepeatSelectors();

  const location = useLocation();
  const path = location.pathname;

  const orderTotal = getOrderTotalBasedOnRoute(
    path,
    grandTotal,
    repeatOrderGrandTotal
  );

  const shouldShowPaymentButton = () => {
    return showPrePayButton && !client_secret && orderTotal ? true : false;
  };

  return { shouldShowPaymentButton };
};

export default useShouldShowPaymentButton;
