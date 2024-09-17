import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useGetContactFormSelectors from "../../../hooks/selectors/use-get-contact-form-selectors";
import { resetContactFormState } from "../../../store/contact-form/contact-form.slice";
import useFireSwal from "../../../hooks/use-fire-swal";

import { emailResponseTimeMessage } from "../../../strings/successes/sucesses-strings";
import { errorSendingContactFormMessage } from "../../../strings/errors/errors-strings";

const useSendContactFormMessageResultSwal = () => {
  const { fireSwal } = useFireSwal();
  const { responseStatus, contactFormError } = useGetContactFormSelectors();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!responseStatus && !contactFormError) return;
    if (responseStatus === 202) {
      fireSwal(
        "success",
        emailResponseTimeMessage,
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetContactFormState());
        }
      });
    } else if (contactFormError) {
      fireSwal(
        "error",
        errorSendingContactFormMessage(contactFormError),
        "",
        0,
        "",
        false,
        "",
        true
      ).then((isConfirmed) => {
        if (isConfirmed) {
          dispatch(resetContactFormState());
        }
      });
    }
  }, [contactFormError, fireSwal, responseStatus, dispatch]);
};

export default useSendContactFormMessageResultSwal;
