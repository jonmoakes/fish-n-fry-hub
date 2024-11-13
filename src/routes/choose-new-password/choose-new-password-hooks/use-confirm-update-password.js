import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useFireSwal from "../../../hooks/use-fire-swal";
import useChooseNewPasswordLogic from "./use-choose-new-password-logic";

import {
  passwordLengthErrorMessage,
  passwordsDontMatchMessage,
} from "../../../strings/errors/errors-strings";
import {
  sureResetPasswordMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmUpdatePassword = () => {
  const { newPassword, confirmNewPassword, getChooseNewPasswordResultThunk } =
    useChooseNewPasswordLogic();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();

  const confirmResult = () => {
    getChooseNewPasswordResultThunk();
  };

  const confirmUpdatePassword = () => {
    if (newPassword.length < 8 || confirmNewPassword.length < 8) {
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
    } else if (newPassword !== confirmNewPassword) {
      fireSwal("error", passwordsDontMatchMessage, "", 0, "", false, "", false);
    } else {
      confirmSwal(
        sureResetPasswordMessage,
        "",
        imSureMessage,
        "",
        confirmResult,
        null
      );
    }
  };
  return { confirmUpdatePassword };
};

export default useConfirmUpdatePassword;
