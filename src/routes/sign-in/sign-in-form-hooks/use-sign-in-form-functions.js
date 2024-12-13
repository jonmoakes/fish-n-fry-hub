import { useDispatch } from "react-redux";
import { account } from "../../../utils/appwrite/appwrite-config";
import { OAuthProvider } from "appwrite";

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
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import {
  signInEmailOtpRoute,
  socialSignInSuccessRoute,
  socialSignInFailRoute,
} from "../../../strings/routes/routes-strings";

const useSignInFormFunctions = () => {
  const { password, signInFormDetails } = useGetSignInFormSelectors();
  let { email } = useGetSignInFormSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

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

  const goToOtpRoute = () => {
    hamburgerHandlerNavigate(signInEmailOtpRoute);
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

  const signInWithGoogle = async () => {
    const successRedirectUrl =
      import.meta.env.MODE === "development"
        ? `http://localhost:8888${socialSignInSuccessRoute}`
        : `https://fishnfry-hub.netlify.app${socialSignInSuccessRoute}`;

    const failureRedirectUrl =
      import.meta.env.MODE === "development"
        ? `http://localhost:8888${socialSignInFailRoute}`
        : `https://fishnfry-hub.netlify.app${socialSignInFailRoute}`;

    try {
      await account.createOAuth2Session(
        OAuthProvider.Google,
        successRedirectUrl,
        failureRedirectUrl
      );
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  };

  return {
    resetSignInError,
    dispatchResetSignInFormState,
    signInThunk,
    dispatchToggleSignInPasswordIsVisible,
    dispatchHideSignInPasswordIsVisible,
    dispatchHandleSignInFormChange,
    goToOtpRoute,
    signInWithGoogle,
  };
};

export default useSignInFormFunctions;
