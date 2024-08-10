import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useHandlePaymentFailed from "./use-handle-payment-failed";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useSendEmailConfirmation from "./use-send-email-confirmation";

import { menuRoute } from "../../../strings/routes/routes-strings";
import { resetCartState } from "../../../store/cart/cart.slice";

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

  const cancelResult = useCallback(() => {
    dispatch(resetCartState());
    hamburgerHandlerNavigate(menuRoute);
  }, [hamburgerHandlerNavigate, dispatch]);

  useEffect(() => {
    if (!Object.keys(paymentResultObject).length) return;

    if (paymentResultStatus === "succeeded") {
      // upload to database first - depending on result of that, fire appropriate swal info here
      fireSwal(
        "success",
        "order placed!",
        "do you wish to be sent a confirmation email?",
        0,
        "yes",
        true,
        "no",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          confirmResult();
        } else {
          cancelResult();
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
    cancelResult,
    fireSwal,
  ]);
};

export default useGetPaymentResultStatus;
