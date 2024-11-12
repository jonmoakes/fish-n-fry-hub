import { useDispatch } from "react-redux";

import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { sendEmailToAdminCloseAccountRequestAsync } from "../../../store/send-email/send-email.thunks";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { loseAllAccountDataMessage } from "../../../strings/info/info-strings";
import {
  sureCloseAccountQuestion,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";

const useConfirmCloseAccount = () => {
  const { id, email } = useGetCurrentUserSelectors();

  const { confirmSwal } = useConfirmSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      sendEmailToAdminCloseAccountRequestAsync({
        id,
        email,
      })
    );
  };

  const confirmCloseAccount = () => {
    confirmSwal(
      sureCloseAccountQuestion,
      loseAllAccountDataMessage,
      imSureMessage,
      "",
      confirmResult,
      null
    );
  };

  return { confirmCloseAccount };
};

export default useConfirmCloseAccount;
