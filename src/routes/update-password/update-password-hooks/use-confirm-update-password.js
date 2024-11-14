import { useDispatch } from "react-redux";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";

import useConfirmSwal from "../../../hooks/use-confirm-swal";
import { generateNewPasswordRequestAsync } from "../../../store/generate-new-password-request/generate-new-password-request.thunks";

import {
  imSureMessage,
  sureResetPasswordMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmUpdatePassword = () => {
  const { email } = useGetCurrentUserSelectors();
  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      generateNewPasswordRequestAsync({
        generateNewPasswordRequestEmail: email,
      })
    );
  };

  const confirmUpdatePassword = () => {
    confirmSwal(
      sureResetPasswordMessage,
      "",
      imSureMessage,
      "",
      confirmResult,
      null
    );
  };
  return { confirmUpdatePassword };
};

export default useConfirmUpdatePassword;
