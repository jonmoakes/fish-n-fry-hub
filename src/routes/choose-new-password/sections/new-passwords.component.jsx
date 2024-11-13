import useHideResetPasswordFieldsOnEmpty from "../choose-new-password-hooks/use-hide-reset-password-fields-on-empty";
import useChooseNewPasswordLogic from "../choose-new-password-hooks/use-choose-new-password-logic";

import { Label, PasswordInput } from "../../../styles/form/form.styles";
import {
  ToggleResetPassword,
  ToggleResetPasswordConfirmPassword,
} from "../../../styles/span/span.styles";
import { RelativePositionDiv } from "../../../styles/div/div.styles";

import {
  confirmYourPassword,
  minEightCharacters,
} from "../../../strings/placeholders/placeholders-strings";

const NewPasswords = () => {
  useHideResetPasswordFieldsOnEmpty();
  const {
    newPassword,
    confirmNewPassword,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    handleChooseNewPasswordChange,
    dispatchToggleResetPasswordIsVisible,
    dispatchToggleResetPasswordConfirmPasswordIsVisible,
  } = useChooseNewPasswordLogic();

  return (
    <>
      <RelativePositionDiv>
        <Label>new password</Label>
        <PasswordInput
          name="newPassword"
          onChange={handleChooseNewPasswordChange}
          placeholder={minEightCharacters}
          value={newPassword || ""}
          required
          type={resetPasswordIsVisible ? "text" : "password"}
        />

        {newPassword.length ? (
          <ToggleResetPassword
            {...{ resetPasswordIsVisible }}
            onClick={dispatchToggleResetPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>

      <RelativePositionDiv>
        <Label>confirm new password</Label>
        <PasswordInput
          name="confirmNewPassword"
          onChange={handleChooseNewPasswordChange}
          placeholder={confirmYourPassword}
          value={confirmNewPassword || ""}
          required
          type={resetPasswordConfirmPasswordIsVisible ? "text" : "password"}
        />

        {confirmNewPassword.length ? (
          <ToggleResetPasswordConfirmPassword
            {...{ resetPasswordConfirmPasswordIsVisible }}
            onClick={dispatchToggleResetPasswordConfirmPasswordIsVisible}
          />
        ) : null}
      </RelativePositionDiv>
    </>
  );
};

export default NewPasswords;
