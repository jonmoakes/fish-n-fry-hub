import { BlackText } from "../../styles/p/p.styles";

const EmailSentInstructions = ({ emailOtpUserId }) => (
  <>
    {emailOtpUserId ? (
      <>
        <BlackText>the email was sent!</BlackText>
        <BlackText>
          when you receive it, please enter in the code below and then tap the
          'confirm code' button to sign in.
        </BlackText>
      </>
    ) : null}
  </>
);

export default EmailSentInstructions;
