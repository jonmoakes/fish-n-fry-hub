import { useDispatch } from "react-redux";
import { account } from "../../../utils/appwrite/appwrite-config";
import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";

import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";
import { signInAsync } from "../../../store/user/user.thunks";
import {
  hideSignInPasswordIsVisible,
  toggleSignInPasswordIsVisible,
} from "../../../store/password-is-visible/password-is-visible.slice";
import { setSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.slice";

import { menuRoute, signInRoute } from "../../../strings/routes/routes-strings";
import useFireSwal from "../../../hooks/use-fire-swal";
import { errorReceivedMessage } from "../../../strings/errors/errors-strings";

const useSignInFormFunctions = () => {
  const { password, signInFormDetails } = useGetSignInFormSelectors();
  let { email } = useGetSignInFormSelectors();
  const { fireSwal } = useFireSwal();

  const dispatch = useDispatch();

  const resetSignInError = () => {
    dispatch(resetCurrentUserErrorMessage());
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

  const signInWithSocial = (provider) => {
    try {
      const redirectUrl =
        import.meta.env.MODE === "development"
          ? "http://localhost:8888/menu"
          : `https://fishnfry-hub.netlify.app/${menuRoute}`;

      const fallbackUrl =
        import.meta.env.MODE === "development"
          ? "http://localhost:8888/sign-in"
          : `https://fishnfry-hub.netlify.app/${signInRoute}`;

      account.createOAuth2Session(provider, redirectUrl, fallbackUrl);
    } catch (error) {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error making the request to sign in with your social account",
          error
        ),
        "",
        0,
        "",
        false,
        "",
        false
      );
    }
  };

  return {
    resetSignInError,
    signInThunk,
    dispatchToggleSignInPasswordIsVisible,
    dispatchHideSignInPasswordIsVisible,
    dispatchHandleSignInFormChange,
    signInWithSocial,
  };
};

export default useSignInFormFunctions;
