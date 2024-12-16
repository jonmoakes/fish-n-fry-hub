import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetUpdateEmailSelectors from "../../../hooks/selectors/use-get-update-email-selectors";
import {
  resetUpdateEmailResult,
  resetUpdateEmailError,
} from "../../../store/update-email/update-email.slice";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  appwriteCredentialsError,
  errorReceivedMessage,
  passwordErrorMessage,
} from "../../../strings/errors/errors-strings";
import {
  emailChangedMessage,
  passwordErrorInstructions,
  signInWithNewEmailMessage,
} from "../../../strings/info/info-strings";

import { signInRoute } from "../../../strings/routes/routes-strings";

const useUpdateEmailResultResultSwal = () => {
  const { updateEmailResult, updateEmailError } = useGetUpdateEmailSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updateEmailResult && !updateEmailError) return;

    const resetUpdateEmailResultAndError = () => {
      dispatch(resetUpdateEmailResult());
      dispatch(resetUpdateEmailError());
    };

    if (updateEmailResult === "fulfilled") {
      fireSwal(
        "success",
        emailChangedMessage,
        signInWithNewEmailMessage,
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          hamburgerHandlerNavigate(signInRoute);
          window.location.reload();
        }
      });
    } else if (
      updateEmailResult === "rejected" &&
      updateEmailError === appwriteCredentialsError
    ) {
      fireSwal(
        "error",
        passwordErrorMessage,
        passwordErrorInstructions,
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          resetUpdateEmailResultAndError();
        }
      });
    } else if (
      updateEmailResult === "rejected" &&
      updateEmailError !== appwriteCredentialsError
    ) {
      const error = updateEmailError;
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error updating your email address..",
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
          resetUpdateEmailResultAndError();
        }
      });
    }
  }, [
    updateEmailResult,
    updateEmailError,
    fireSwal,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useUpdateEmailResultResultSwal;
