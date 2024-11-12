import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetSendEmailSelectors from "../../../hooks/selectors/use-get-send-email-selectors";
import { resetSendEmailState } from "../../../store/send-email/send-email.slice";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { successSendingCloseAccountEmailMessage } from "../../../strings/successes/sucesses-strings";
import { receiveEmailWhenCompleteMessage } from "../../../strings/info/info-strings";
import { errorSendingAccountClosureRequest } from "../../../strings/errors/errors-strings";
import { accountRoute } from "../../../strings/routes/routes-strings";

const useCloseAccountSwal = () => {
  const { sendEmailStatusCode, sendEmailError } = useGetSendEmailSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!sendEmailStatusCode && !sendEmailError) return;

    if (sendEmailStatusCode === 202) {
      fireSwal(
        "success",
        successSendingCloseAccountEmailMessage,
        receiveEmailWhenCompleteMessage,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
          hamburgerHandlerNavigate(accountRoute);
        }
      });
    } else {
      fireSwal(
        "error",
        errorSendingAccountClosureRequest,
        `the error received was: '${sendEmailError}'.please try again or contact us if the error continues.`,
        0,
        true,
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetSendEmailState());
        }
      });
    }
  }, [
    sendEmailStatusCode,
    sendEmailError,
    fireSwal,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useCloseAccountSwal;
