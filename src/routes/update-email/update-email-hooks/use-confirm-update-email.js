import { useDispatch } from "react-redux";

import useGetUpdateEmailSelectors from "../../../hooks/selectors/use-get-update-email-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { updateEmailAsync } from "../../../store/update-email/update-email.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

import {
  imSureMessage,
  confirmUpdateEmailMessage,
} from "../../../strings/confirms/confirms-strings";
import {
  sameEmailMessage,
  chooseAnotherEmailMessage,
} from "../../../strings/info/info-strings";
import { emailsDontMatchMessage } from "../../../strings/errors/errors-strings";

import { validateEmail } from "../../../functions/validate-email";

const useConfirmUpdateEmail = () => {
  const { id, email } = useGetCurrentUserSelectors();
  const { newEmail, confirmNewEmail, password } = useGetUpdateEmailSelectors();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      updateEmailAsync({
        id,
        newEmail,
        password,
      })
    );
  };

  const confirmUpdateEmail = () => {
    if (!validateEmail(newEmail)) {
      showInvalidEmailMessageSwal();
    } else if (newEmail === email) {
      fireSwal(
        "error",
        sameEmailMessage,
        chooseAnotherEmailMessage,
        0,
        "",
        false,
        "",
        true
      );
    } else if (newEmail !== confirmNewEmail) {
      fireSwal("error", emailsDontMatchMessage, "", 0, "", false, "", true);
    } else {
      confirmSwal(
        confirmUpdateEmailMessage(newEmail),
        "",
        imSureMessage,
        "",
        confirmResult,
        null
      );
    }
  };

  return { confirmUpdateEmail };
};

export default useConfirmUpdateEmail;
