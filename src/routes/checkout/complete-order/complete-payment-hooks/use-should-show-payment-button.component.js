import useGetCardInputResultSelectors from "../../../../hooks/selectors/use-get-card-input-result-selectors";
import useGetHandlePaymentSelectors from "../../../../hooks/selectors/use-get-handle-payment-selectors";
import useGetCartItemsSelectors from "../../../../hooks/selectors/use-get-cart-items-selectors";

const useShouldShowPaymentButton = () => {
  const { showPrePayButton } = useGetCardInputResultSelectors();
  const { client_secret } = useGetHandlePaymentSelectors();
  const { grandTotal } = useGetCartItemsSelectors();

  const shouldShowPaymentButton = () => {
    return showPrePayButton && !client_secret && grandTotal ? true : false;
  };

  return { shouldShowPaymentButton };
};

export default useShouldShowPaymentButton;
