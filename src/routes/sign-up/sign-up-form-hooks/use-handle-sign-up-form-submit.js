import useGetSignUpFormSelectors from "../../../hooks/selectors/use-get-sign-up-form-selectors";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import useSignUpThunk from "./use-sign-up-form-functions";

import { validateEmail } from "../../../functions/validate-email";

import {
  missingFieldsMessage,
  passwordCantContainSpaceMessage,
  passwordLengthErrorMessage,
  passwordsDontMatchMessage,
} from "../../../strings/errors/errors-strings";
import { confirmSignUpMessage } from "../../../strings/confirms/confirms-strings";
import { yesSignUpMessage } from "../../../strings/info/info-strings";

const useHandleSignUpFormSubmit = () => {
  const { name, email, password, confirmPassword } =
    useGetSignUpFormSelectors();
  const { signUpThunk } = useSignUpThunk();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const confirmResult = () => {
    signUpThunk();
  };

  const confirmSignUp = () => {
    confirmSwal(confirmSignUpMessage, "", yesSignUpMessage, "", () =>
      confirmResult()
    );
  };

  const handleSignUpFormSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      fireSwal("error", missingFieldsMessage, "", 0, "", false, "", false);
    } else if (!validateEmail(email)) {
      showInvalidEmailMessageSwal();
    } else if (password.length < 8) {
      fireSwal(
        "error",
        passwordLengthErrorMessage,
        "",
        0,
        "",
        false,
        "",
        false
      );
    } else if (password !== confirmPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, "", false, "", false);
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
      confirmSignUp();
    }
  };

  return { handleSignUpFormSubmit };
};

export default useHandleSignUpFormSubmit;
