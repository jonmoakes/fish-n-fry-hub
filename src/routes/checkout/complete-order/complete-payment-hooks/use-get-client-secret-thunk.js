import { useDispatch } from "react-redux";
import { useElements, useStripe } from "@stripe/react-stripe-js";

import useGetCartItemsSelectors from "../../../../hooks/selectors/use-get-cart-items-selectors";
import { getClientSecretAsync } from "../../../../store/handle-payment/handle-payment.thunks";

import { stripeSecretKey } from "../../../../constants/constants";

const useGetClientSecretThunk = () => {
  const { grandTotal } = useGetCartItemsSelectors();

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const getClientSecretThunk = () => {
    if (!stripe || !elements) return;
    dispatch(getClientSecretAsync({ stripeSecretKey, grandTotal }));
  };

  return { getClientSecretThunk };
};

export default useGetClientSecretThunk;
