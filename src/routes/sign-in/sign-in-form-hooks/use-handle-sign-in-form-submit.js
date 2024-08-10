import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  missingFieldsMessage,
  passwordCantContainSpaceMessage,
} from "../../../strings/errors/errors-strings";

import { validateEmail } from "../../../functions/validate-email";
import useSignInFormFunctions from "./use-sign-in-form-functions";

const useHandleSignInFormSubmit = () => {
  const { email, password } = useGetSignInFormSelectors();
  const { signInThunk } = useSignInFormFunctions();

  const { fireSwal } = useFireSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const handleSignInFormSubmit = () => {
    if (!email || !password) {
      fireSwal("error", missingFieldsMessage, "", 0, "", false, "", false);
    } else if (!validateEmail(email)) {
      showInvalidEmailMessageSwal();
    } else if (password.includes(" ")) {
      fireSwal(
        "error",
        passwordCantContainSpaceMessage,
        "",
        0,
        "",
        false,
        "",
        false
      );
    } else {
      signInThunk();
    }
  };

  return { handleSignInFormSubmit };
};

export default useHandleSignInFormSubmit;
