import { useEffect } from "react";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useSignUpFormFunctions from "./use-sign-up-form-functions";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  appwriteNoUserError,
  errorSigningUpMessage,
} from "../../../strings/errors/errors-strings";

const useHandleSignUpFormError = () => {
  const { currentUserError } = useGetCurrentUserSelectors();
  const { resetSignUpError } = useSignUpFormFunctions();
  const { fireSwal } = useFireSwal();

  useEffect(() => {
    if (!currentUserError || currentUserError === appwriteNoUserError) return;

    fireSwal(
      "error",
      errorSigningUpMessage(currentUserError),
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetSignUpError();
      }
    });
  }, [fireSwal, currentUserError, resetSignUpError]);
};

export default useHandleSignUpFormError;
