import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import {
  requestSignInEmailOtpAsync,
  signInWithOtpAsync,
} from "../../../store/user/user.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import { validateEmail } from "../../../functions/validate-email";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";
import { setSignInFormDetails } from "../../../store/sign-in-form/sign-in-form.slice";
import useGetSignInFormSelectors from "../../../hooks/selectors/use-get-sign-in-form-selectors";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { confirmSendOtpCode } from "../../../strings/confirms/confirms-strings";
import { missingFieldsMessage } from "../../../strings/errors/errors-strings";

const useSignInEmailOtpFunctions = () => {
  const { email, otp, signInFormDetails } = useGetSignInFormSelectors();

  const { emailOtpUserId } = useGetCurrentUserSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();
  const dispatch = useDispatch();

  const dispatchHandleSignInFormOtpChange = (event) => {
    const { name, value } = event.target;
    dispatch(setSignInFormDetails({ ...signInFormDetails, [name]: value }));
  };

  const requestSignInEmailOtpThunk = () => {
    if (!email) {
      fireSwal("error", missingFieldsMessage, "", 0, "", false, "", false);
    } else if (!validateEmail(email)) {
      showInvalidEmailMessageSwal();
    } else {
      const confirmResult = () => {
        dispatch(requestSignInEmailOtpAsync({ email }));
      };
      confirmSwal(
        confirmSendOtpCode(email),
        "",
        "yes, send the code!",
        "no, let me try again",
        confirmResult,
        null
      );
    }
  };

  const signInWithOtp = async () => {
    dispatch(signInWithOtpAsync({ emailOtpUserId, otp }));
  };

  return {
    emailOtpUserId,
    email,
    dispatchHandleSignInFormOtpChange,
    requestSignInEmailOtpThunk,
    otp,
    signInWithOtp,
  };
};

export default useSignInEmailOtpFunctions;
