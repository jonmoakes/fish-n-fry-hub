import { Navigate } from "react-router-dom";

import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";

import SkeletonBox from "../../skeleton-box/skeleton-box.component";

import { paymentResultRoute } from "../../../strings/routes/routes-strings";

const RedirectAndLoader = () => {
  const { handlePaymentIsLoading, paymentResultObject } =
    useGetHandlePaymentSelectors();

  return (
    <>
      {Object.keys(paymentResultObject).length ? (
        <Navigate replace to={paymentResultRoute} />
      ) : null}
      {handlePaymentIsLoading ? (
        <SkeletonBox loadingText="Processing..." />
      ) : null}
    </>
  );
};

export default RedirectAndLoader;
