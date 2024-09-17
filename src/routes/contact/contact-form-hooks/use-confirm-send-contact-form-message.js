import { useDispatch } from "react-redux";

import useGetContactFormSelectors from "../../../hooks/selectors/use-get-contact-form-selectors";
import { sendContactFormMessageAsync } from "../../../store/contact-form/contact-form.thunks";
import useFireSwal from "../../../hooks/use-fire-swal";
import useConfirmSwal from "../../../hooks/use-confirm-swal";
import useShowInvalidEmailMessageSwal from "../../../hooks/use-show-invalid-email-message-swal";

import { validateEmail } from "../../../functions/validate-email";

import { sureSendContactFormMessage } from "../../../strings/confirms/confirms-strings";
import { missingFieldsMessage } from "../../../strings/errors/errors-strings";
import { sendEmailText } from "../../../strings/info/info-strings";

const useConfirmSendContactFormMessage = () => {
  const { name, email, message } = useGetContactFormSelectors();
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { showInvalidEmailMessageSwal } = useShowInvalidEmailMessageSwal();

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(
      sendContactFormMessageAsync({
        name,
        email,
        message,
      })
    );
  };

  const confirmSendContactFormMessage = () => {
    if (!name || !email || !message) {
      fireSwal("error", missingFieldsMessage, "", 0, true, false);
    } else if (!validateEmail(email)) {
      showInvalidEmailMessageSwal();
    } else {
      confirmSwal(
        sureSendContactFormMessage,
        "",
        sendEmailText,
        "",
        confirmResult,
        null
      );
    }
  };

  return { confirmSendContactFormMessage };
};

export default useConfirmSendContactFormMessage;
