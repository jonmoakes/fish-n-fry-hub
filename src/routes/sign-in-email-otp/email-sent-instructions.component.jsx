import { useDispatch } from "react-redux";

import { resetEmailOtpUserId } from "../../store/user/user.slice";

import { MinimalButton } from "../../styles/buttons/buttons.styles";
import { BlackText } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const EmailSentInstructions = ({ emailOtpUserId }) => {
  const dispatch = useDispatch();

  return (
  <>
    {emailOtpUserId ? (
      <>
        <BlackText>the email was sent!</BlackText>
        <BlackText>
          when you receive it, please enter in the code below and then tap the
          'confirm code' button to sign in.
        </BlackText>
        <BlackText>need to request another passcode?</BlackText>
        <MinimalButton onClick={() => dispatch(resetEmailOtpUserId())}>click here</MinimalButton>
        <br/>
        <BlackHr/>
      </>
    ) : null}
  </>
);
}

export default EmailSentInstructions;
