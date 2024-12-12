import { useEffect } from "react";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import {
  appwriteNoUserError,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";
import { useDispatch } from "react-redux";
import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";

const useSignInEmailOtpResultUseEffect = () => {
  const { currentUserError } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUserError || currentUserError === appwriteNoUserError) return;

    if (currentUserError === "Invalid token passed in the request.") {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error in either the OTP code that you entered, or with the request ID on our end.",
          currentUserError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCurrentUserErrorMessage());
        }
      });
    } else {
      fireSwal(
        "error",
        errorReceivedMessage(
          "there was an error starting your session..",
          currentUserError
        ),
        "",
        0,
        "",
        false,
        "",
        false
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetCurrentUserErrorMessage());
        }
      });
    }
  }, [currentUserError, dispatch, fireSwal]);
};

export default useSignInEmailOtpResultUseEffect;
