import { useEffect, useState } from "react";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useChooseNewPasswordLogic from "./use-choose-new-password-logic";
import useSignOutSubmitThunk from "../../../hooks/use-sign-out-submit-thunk";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { errorReceivedMessage } from "../../../strings/errors/errors-strings";
import {
  signOutSoCanSignInWithNewPasswordMessage,
  signInWithNewPasswordMessage,
} from "../../../strings/info/info-strings";
import { passwordResetSuccessMessage } from "../../../strings/successes/sucesses-strings";
import { signInRoute } from "../../../strings/routes/routes-strings";

const useChooseNewPasswordResultSwal = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const {
    newPasswordResult,
    newPasswordError,
    dispatchResetPasswordResultError,
  } = useChooseNewPasswordLogic();
  const { fireSwal } = useFireSwal();
  const { signOutSubmitThunk } = useSignOutSubmitThunk();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const [swalConfirmed, setSwalConfirmed] = useState(false);

  useEffect(() => {
    if ((!newPasswordError && !newPasswordResult) || swalConfirmed) return;

    if (newPasswordResult && currentUser) {
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        signOutSoCanSignInWithNewPasswordMessage,
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          setSwalConfirmed(true);
          signOutSubmitThunk();
        }
      });
    } else if (newPasswordResult && !currentUser) {
      fireSwal(
        "success",
        passwordResetSuccessMessage,
        signInWithNewPasswordMessage,
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          setSwalConfirmed(true);
          hamburgerHandlerNavigate(signInRoute);
        }
      });
    } else if (newPasswordError) {
      const error =
        newPasswordError ===
        "Invalid `password` param: Password must be between 8 and 265 characters long, and should not be one of the commonly used password."
          ? "the password you chose is not secure"
          : newPasswordError;

      fireSwal(
        "error",
        errorReceivedMessage(
          "sorry, there was an error resetting your password.",
          error
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatchResetPasswordResultError();
        }
      });
    }
  }, [
    newPasswordError,
    newPasswordResult,
    fireSwal,
    hamburgerHandlerNavigate,
    currentUser,
    dispatchResetPasswordResultError,
    signOutSubmitThunk,
    swalConfirmed,
  ]);
};

export default useChooseNewPasswordResultSwal;
