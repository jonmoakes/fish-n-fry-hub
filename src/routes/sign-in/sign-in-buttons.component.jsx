import useHandleSignInFormSubmit from "./sign-in-form-hooks/use-handle-sign-in-form-submit";
import useIsOnline from "../../hooks/use-is-online";
import useSignInFormFunctions from "./sign-in-form-hooks/use-sign-in-form-functions";

import NetworkError from "../../components/errors/network-error.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { ForgotPasswordDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackText } from "../../styles/p/p.styles";

import { forgotPasswordRequestRoute } from "../../strings/routes/routes-strings";

const SignInButtons = () => {
  const { handleSignInFormSubmit } = useHandleSignInFormSubmit();
  const { goToOtpRoute, signInWithGoogle } = useSignInFormFunctions();

  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <TopMarginDiv>
          <YellowGreenButton type="button" onClick={handleSignInFormSubmit}>
            Sign In
          </YellowGreenButton>

          <ForgotPasswordDiv>
            <StyledLink to={forgotPasswordRequestRoute}>
              forgot password?
            </StyledLink>
          </ForgotPasswordDiv>

          <BlackHr />

          <BlackText>or sign in with our other options:</BlackText>
          <YellowGreenButton
            className="google"
            type="button"
            onClick={signInWithGoogle}
          >
            sign in with google
          </YellowGreenButton>
          <BlackHr />

          <YellowGreenButton
            className="otp"
            type="button"
            onClick={goToOtpRoute}
          >
            email a passcode
          </YellowGreenButton>
        </TopMarginDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButtons;
