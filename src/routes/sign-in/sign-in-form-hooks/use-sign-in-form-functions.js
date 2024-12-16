import { useDispatch } from "react-redux";

import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";
import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";
import { signInAsync } from "../../../store/user/user.thunks";
import {
  hideSignInPasswordIsVisible,
  toggleSignInPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";
import {
  resetSignInFormState,
  setSignInFormDetails,
} from "../../../store/sign-in-form/sign-in-form.slice";

const useSignInFormFunctions = () => {
  const { password, signInFormDetails } = useGetSignInFormSelectors();
  let { email } = useGetSignInFormSelectors();

  const dispatch = useDispatch();

  const resetSignInError = () => {
    dispatch(resetCurrentUserErrorMessage());
  };

  const dispatchResetSignInFormState = () => {
    dispatch(resetSignInFormState());
  };

  const signInThunk = () => {
    email = email.toLowerCase();
    dispatch(signInAsync({ email, password }));
  };

  const dispatchToggleSignInPasswordIsVisible = () => {
    dispatch(toggleSignInPasswordIsVisible());
  };

  const dispatchHideSignInPasswordIsVisible = () => {
    dispatch(hideSignInPasswordIsVisible());
  };

  const dispatchHandleSignInFormChange = (event) => {
    const { value, name } = event.target;
    dispatch(setSignInFormDetails({ ...signInFormDetails, [name]: value }));
  };

  return {
    resetSignInError,
    dispatchResetSignInFormState,
    signInThunk,
    dispatchToggleSignInPasswordIsVisible,
    dispatchHideSignInPasswordIsVisible,
    dispatchHandleSignInFormChange,
  };
};

export default useSignInFormFunctions;
