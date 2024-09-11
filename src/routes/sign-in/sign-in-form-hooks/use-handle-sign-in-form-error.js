import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useSignInFormFunctions from "./use-sign-in-form-functions";

import {
  appwriteNoUserError,
  appwriteCredentialsError,
  passwordLengthErrorMessage,
  appwritePasswordLengthError,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";

const useHandleSignInFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { resetSignInError } = useSignInFormFunctions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (
      !currentUserError ||
      (currentUserError &&
        (currentUserError === appwriteNoUserError ||
          currentUserError === "Failed to fetch"))
    )
      return;

    const errorDetails =
      currentUserError === appwriteCredentialsError
        ? appwriteCredentialsError
        : currentUserError === appwritePasswordLengthError
        ? passwordLengthErrorMessage
        : currentUserError;

    fireSwal(
      "error",
      errorReceivedMessage(
        "sorry, there was an error trying to sign you in.",
        errorDetails
      ),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetSignInError();
      }
    });
  }, [fireSwal, currentUserError, resetSignInError]);
};

export default useHandleSignInFormError;
