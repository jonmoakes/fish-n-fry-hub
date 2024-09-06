import { useEffect } from "react";
import useFireSwal from "../../../hooks/use-fire-swal";
import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import { errorSendingEmailMessage } from "../../../strings/errors/errors-strings";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { uploadOrderDeleteCartItemsRoute } from "../../../strings/routes/routes-strings";

const useSendEmailOrderErrorSwal = () => {
  const { sendEmailError } = useGetSendEmailSelectors();

  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!sendEmailError) return;

    fireSwal(
      "error",
      errorSendingEmailMessage(sendEmailError),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
      }
    });
  }, [fireSwal, hamburgerHandlerNavigate, sendEmailError]);
};

export default useSendEmailOrderErrorSwal;
