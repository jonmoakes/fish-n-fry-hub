import { useDispatch } from "react-redux";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";

import useGetHandlePaymentSelectors from "../../../../hooks/selectors/use-get-handle-payment-selectors";
import useGetCurrentUserSelectors from "../../../../hooks/selectors/use-get-current-user-selectors";
import { getPaymentResultObjectAsync } from "../../../../store/handle-payment/handle-payment.thunks";

const useGetPaymentResultObjectThunk = () => {
  const { client_secret } = useGetHandlePaymentSelectors();
  const { name, email } = useGetCurrentUserSelectors();

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const getPaymentResultObjectThunk = () => {
    dispatch(
      getPaymentResultObjectAsync({
        stripe,
        client_secret,
        cardElement: elements.getElement(CardElement),
        name,
        email,
      })
    );
  };

  return { getPaymentResultObjectThunk };
};

export default useGetPaymentResultObjectThunk;
