import { useEffect } from "react";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import {
  appwriteNoUserError,
  errorReceivedMessage,
} from "../../../strings/errors/errors-strings";
import { useDispatch } from "react-redux";
import { resetCurrentUserErrorMessage } from "../../../store/user/user.slice";

const useSignInEmailOtpRequestResultUseEffect = () => {
  const { currentUserError } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUserError || currentUserError === appwriteNoUserError) return;

    fireSwal(
      "error",
      errorReceivedMessage(
        "there was an error when trying to sending the email.",
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
  }, [currentUserError, dispatch, fireSwal]);
};

export default useSignInEmailOtpRequestResultUseEffect;
