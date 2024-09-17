import useIsOnline from "../../../hooks/use-is-online";
import useConfirmSendContactFormMessage from "../contact-form-hooks/use-confirm-send-contact-form-message";
import useGetContactFormSelectors from "../../../hooks/selectors/use-get-contact-form-selectors";

import NetworkError from "../../../components/errors/network-error.component";

import {
  DisabledButton,
  YellowGreenButton,
} from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const SendMessageButton = () => {
  const { contactFormIsLoading } = useGetContactFormSelectors();
  const { isOnline } = useIsOnline();
  const { confirmSendContactFormMessage } = useConfirmSendContactFormMessage();

  return (
    <>
      <BlackHr />

      {!isOnline ? (
        <NetworkError />
      ) : !contactFormIsLoading ? (
        <YellowGreenButton
          type="button"
          onClick={confirmSendContactFormMessage}
        >
          Send Message
        </YellowGreenButton>
      ) : (
        contactFormIsLoading && (
          <DisabledButton className="disabled">please wait...</DisabledButton>
        )
      )}
    </>
  );
};

export default SendMessageButton;
