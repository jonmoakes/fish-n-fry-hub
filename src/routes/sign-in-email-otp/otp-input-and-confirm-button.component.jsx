import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Label, StyledInput } from "../../styles/form/form.styles";
import { BlackText } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const OtpInputAndConfirmButton = ({
  emailOtpUserId,
  otp,
  dispatchHandleSignInFormOtpChange,
  signInWithOtp,
}) => (
  <>
    {emailOtpUserId ? (
      <>
        <Label>
          <RedSpan>* </RedSpan>one time passcode:
        </Label>
        <StyledInput
          type="number"
          pattern="[1-9]*"
          inputMode="numeric"
          name="otp"
          value={otp || ""}
          onChange={dispatchHandleSignInFormOtpChange}
          required
        />
      </>
    ) : null}
    {!otp ? null : otp.length === 6 ? (
      <YellowGreenButton type="button" onClick={signInWithOtp}>
        confirm code
      </YellowGreenButton>
    ) : (
      <BlackText>the code should be 6 digits long</BlackText>
    )}
  </>
);

export default OtpInputAndConfirmButton;
