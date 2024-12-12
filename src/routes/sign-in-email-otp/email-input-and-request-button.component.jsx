import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Label, StyledInput } from "../../styles/form/form.styles";
import { RedSpan } from "../../styles/span/span.styles";

const EmailInputAndRequestButton = ({
  emailOtpUserId,
  email,
  dispatchHandleSignInFormOtpChange,
  requestSignInEmailOtpThunk,
}) => (
  <>
    {!emailOtpUserId ? (
      <>
        <Label>
          <RedSpan>* </RedSpan>email:
        </Label>
        <StyledInput
          type="email"
          name="email"
          value={email || ""}
          onChange={dispatchHandleSignInFormOtpChange}
        />

        <YellowGreenButton type="button" onClick={requestSignInEmailOtpThunk}>
          send OTP request
        </YellowGreenButton>
      </>
    ) : null}
  </>
);

export default EmailInputAndRequestButton;
