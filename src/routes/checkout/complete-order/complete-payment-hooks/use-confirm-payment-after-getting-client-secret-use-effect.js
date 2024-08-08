import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import useGetCardInputResultSelectors from "../../../../hooks/selectors/use-get-card-input-result-selectors";
import useGetHandlePaymentSelectors from "../../../../hooks/selectors/use-get-handle-payment-selectors";
import { resetCardInputResultState } from "../../../../store/card-input-result/card-input-result.slice";
import { resetAllHandlePaymentState } from "../../../../store/handle-payment/handle-payment.slice";
import useGetPaymentResultObjectThunk from "./use-get-payment-result-object-thunk";
import useConfirmSwal from "../../../../hooks/use-confirm-swal";

const useConfirmPaymentAfterGettingClientSecretUseEffect = () => {
  const { showPrePayButton } = useGetCardInputResultSelectors();
  const { client_secret, showConfirmButton, userHasConfirmedPayment } =
    useGetHandlePaymentSelectors();

  const { getPaymentResultObjectThunk } = useGetPaymentResultObjectThunk();
  const { confirmSwal } = useConfirmSwal();

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  useEffect(() => {
    const shouldShowConfirmAddFundsSwal = () => {
      return showPrePayButton && showConfirmButton && client_secret
        ? true
        : false;
    };

    if (
      !stripe ||
      !elements ||
      !shouldShowConfirmAddFundsSwal() ||
      userHasConfirmedPayment
    )
      return;

    const confirmResult = () => {
      getPaymentResultObjectThunk();
    };

    const cancelResult = () => {
      dispatch(resetAllHandlePaymentState());
      dispatch(resetCardInputResultState());
    };

    confirmSwal(
      "complete your order?",
      "",
      "yes, place order",
      confirmResult,
      cancelResult
    );
  }, [
    client_secret,
    confirmSwal,
    elements,
    getPaymentResultObjectThunk,
    showConfirmButton,
    showPrePayButton,
    stripe,
    userHasConfirmedPayment,
    dispatch,
  ]);
};

export default useConfirmPaymentAfterGettingClientSecretUseEffect;
