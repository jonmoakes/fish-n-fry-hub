import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import useGetCardInputResultSelectors from "../../../hooks/selectors/use-get-card-input-result-selectors";
import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useGetPaymentResultObjectThunk from "./use-get-payment-result-object-thunk";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import {
  confirmCompleteOrderMessage,
  yesPlaceOrderMessage,
} from "../../../strings/confirms/confirms-strings";

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
    const shouldShowConfirmPlaceOrderSwal = () => {
      return showPrePayButton && showConfirmButton && client_secret
        ? true
        : false;
    };

    if (
      !stripe ||
      !elements ||
      !shouldShowConfirmPlaceOrderSwal() ||
      userHasConfirmedPayment
    )
      return;

    const confirmResult = () => {
      getPaymentResultObjectThunk();
    };

    const cancelResult = () => {
      window.location.reload();
    };

    confirmSwal(
      confirmCompleteOrderMessage,
      "",
      yesPlaceOrderMessage,
      "",
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
