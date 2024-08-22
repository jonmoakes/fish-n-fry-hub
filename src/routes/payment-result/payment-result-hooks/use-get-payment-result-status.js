import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useHandlePaymentFailed from "./use-handle-payment-failed";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { uploadOrderResultRoute } from "../../../strings/routes/routes-strings";

const useGetPaymentResultStatus = () => {
  const { paymentResultObject } = useGetHandlePaymentSelectors();
  const { handlePaymentFailed } = useHandlePaymentFailed();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  // payment result is an object initially when fulfilled, which we get the status off.
  const paymentResultStatus =
    paymentResultObject?.paymentIntent?.status === undefined
      ? undefined
      : paymentResultObject.paymentIntent.status;

  useEffect(() => {
    if (!Object.keys(paymentResultObject).length) return;

    if (paymentResultStatus === "succeeded") {
      hamburgerHandlerNavigate(uploadOrderResultRoute);
    } else {
      handlePaymentFailed();
    }
  }, [
    handlePaymentFailed,
    paymentResultObject,
    paymentResultStatus,
    hamburgerHandlerNavigate,
    dispatch,
  ]);
};

export default useGetPaymentResultStatus;
