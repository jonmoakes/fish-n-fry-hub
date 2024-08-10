import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import { checkoutRoute } from "../../../strings/routes/routes-strings";

const useHandlePaymentFailed = () => {
  const { paymentResultObject } = useGetHandlePaymentSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const handlePaymentFailed = () => {
    const error = paymentResultObject.error.message;
    fireSwal(
      "error",
      errorReceivedMessage(
        "Sorry, There Was An Error Submitting Payment. Your Card Has Not Been Charged.",
        error
      ),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(checkoutRoute);
      }
    });
  };

  return { handlePaymentFailed };
};

export default useHandlePaymentFailed;
