import { useDispatch } from "react-redux";

import useGetChooseNewPasswordSelectors from "../../../hooks/selectors/use-get-choose-new-password-selectors";
import useGetPasswordIsVisibleSelectors from "../../../hooks/selectors/use-get-password-is-visible-selectors";
import {
  resetChooseNewPasswordState,
  resetPasswordResultError,
  setNewPasswordDetails,
} from "../../../store/choose-new-password/choose-new-password.slice";
import {
  hideResetPasswordIsVisible,
  hideResetPasswordConfirmPasswordIsVisible,
  toggleResetPasswordIsVisible,
  toggleResetPasswordConfirmPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";
import { getChooseNewPasswordResultAsync } from "../../../store/choose-new-password/choose-new-password.thunks";

const useChooseNewPasswordLogic = () => {
  const {
    newPasswordResultIsLoading,
    newPasswordResult,
    newPasswordError,
    newPassword,
    confirmNewPassword,
    newPasswordDetails,
  } = useGetChooseNewPasswordSelectors();
  const { resetPasswordIsVisible, resetPasswordConfirmPasswordIsVisible } =
    useGetPasswordIsVisibleSelectors();
  const dispatch = useDispatch();

  const handleChooseNewPasswordChange = (event) => {
    const { value, name } = event.target;
    dispatch(setNewPasswordDetails({ ...newPasswordDetails, [name]: value }));
  };

  const dispatchResetPasswordResultError = () => {
    dispatch(resetPasswordResultError());
  };

  const dispatchResetChooseNewPasswordState = () => {
    dispatch(resetChooseNewPasswordState());
  };

  const dispatchToggleResetPasswordIsVisible = () => {
    dispatch(toggleResetPasswordIsVisible());
  };

  const dispatchToggleResetPasswordConfirmPasswordIsVisible = () => {
    dispatch(toggleResetPasswordConfirmPasswordIsVisible());
  };

  const dispatchHideResetPasswordIsVisible = () => {
    dispatch(hideResetPasswordIsVisible());
  };

  const dispatchHideResetPasswordConfirmPasswordIsVisible = () => {
    dispatch(hideResetPasswordConfirmPasswordIsVisible());
  };

  const getChooseNewPasswordResultThunk = () => {
    dispatch(
      getChooseNewPasswordResultAsync({ newPassword, confirmNewPassword })
    );
  };

  return {
    newPasswordResultIsLoading,
    newPasswordResult,
    newPasswordError,
    newPassword,
    confirmNewPassword,
    newPasswordDetails,
    resetPasswordIsVisible,
    resetPasswordConfirmPasswordIsVisible,
    handleChooseNewPasswordChange,
    dispatchResetPasswordResultError,
    dispatchToggleResetPasswordIsVisible,
    dispatchToggleResetPasswordConfirmPasswordIsVisible,
    dispatchHideResetPasswordIsVisible,
    dispatchResetChooseNewPasswordState,
    dispatchHideResetPasswordConfirmPasswordIsVisible,
    getChooseNewPasswordResultThunk,
  };
};

export default useChooseNewPasswordLogic;
