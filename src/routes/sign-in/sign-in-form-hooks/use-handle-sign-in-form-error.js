import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useSignInFormFunctions from "./use-sign-in-form-functions";

import {
  appwriteNoUserError,
  errorSigningInMessage,
  appwriteCredentialsError,
  passwordLengthErrorMessage,
  appwritePasswordLengthError,
} from "../../../strings/errors/errors-strings";

const useHandleSignInFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { resetSignInError } = useSignInFormFunctions();

  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (
      !currentUserError ||
      (currentUserError && currentUserError === appwriteNoUserError)
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
      errorSigningInMessage(errorDetails),
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetSignInError();
      }
    });
  }, [fireSwal, currentUserError, resetSignInError]);
};

export default useHandleSignInFormError;
