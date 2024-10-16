import { useEffect } from "react";

import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import { emailSentMessage } from "../../../strings/successes/sucesses-strings";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { ordersOwnerRoute } from "../../../strings/routes/routes-strings";

const useSendEmailResultSwalUseEffect = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();

  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;

    if (sendEmailStatusCode === 202) {
      fireSwal("success", emailSentMessage, "", 0, "", false, "", true).then(
        (isConfirmed) => {
          if (isConfirmed) {
            hamburgerHandlerNavigate(ordersOwnerRoute);
          }
        }
      );
    } else if (sendEmailError) {
      fireSwal(
        "error",
        `sorry,the email failed to send.. Please send the email manually. The error received was ${sendEmailError}`,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(ordersOwnerRoute);
        }
      });
    }
  }, [sendEmailStatusCode, sendEmailError, hamburgerHandlerNavigate, fireSwal]);
};

export default useSendEmailResultSwalUseEffect;
