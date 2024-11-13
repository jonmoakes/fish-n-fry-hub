import { useEffect } from "react";

import useChooseNewPasswordLogic from "./use-choose-new-password-logic";

const useHideResetPasswordFieldsOnEmpty = () => {
  const {
    newPassword,
    confirmNewPassword,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    dispatchHideResetPasswordIsVisible,
    dispatchHideResetPasswordConfirmPasswordIsVisible,
  } = useChooseNewPasswordLogic();

  useEffect(() => {
    if (resetPasswordIsVisible && !newPassword.length) {
      dispatchHideResetPasswordIsVisible();
    } else if (
      resetPasswordConfirmPasswordIsVisible &&
      !confirmNewPassword.length
    ) {
      dispatchHideResetPasswordConfirmPasswordIsVisible();
    }
  }, [
    confirmNewPassword,
    newPassword,
    resetPasswordConfirmPasswordIsVisible,
    resetPasswordIsVisible,
    dispatchHideResetPasswordIsVisible,
    dispatchHideResetPasswordConfirmPasswordIsVisible,
  ]);
};

export default useHideResetPasswordFieldsOnEmpty;
