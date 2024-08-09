import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useHandlePaymentFailed from "./use-handle-payment-failed";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useSendEmailConfirmation from "./use-send-email-confirmation";

const useGetPaymentResultStatus = () => {
  const { paymentResultObject } = useGetHandlePaymentSelectors();
  const { name, email } = useGetCurrentUserSelectors();
  const { handlePaymentFailed } = useHandlePaymentFailed();
  const { sendEmailConfirmation } = useSendEmailConfirmation();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  // payment result is an object initially when fulfilled, which we get the status off.
  const paymentResultStatus =
    paymentResultObject?.paymentIntent?.status === undefined
      ? undefined
      : paymentResultObject.paymentIntent.status;

  const confirmResult = useCallback(() => {
    sendEmailConfirmation(name, email);
  }, [name, email, sendEmailConfirmation]);

  useEffect(() => {
    if (!Object.keys(paymentResultObject).length) return;

    if (paymentResultStatus === "succeeded") {
      fireSwal(
        "success",
        "order placed!",
        "tap 'ok',  send an email confirmation of your order.",
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          confirmResult();
        }
      });
    } else {
      handlePaymentFailed();
    }
  }, [
    handlePaymentFailed,
    paymentResultObject,
    paymentResultStatus,
    hamburgerHandlerNavigate,
    dispatch,
    confirmResult,
    fireSwal,
  ]);
};

export default useGetPaymentResultStatus;
