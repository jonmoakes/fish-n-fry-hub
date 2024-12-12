import Balancer from "react-wrap-balancer";

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
  const { goToOtpRoute } = useSignInFormFunctions();

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
          <BlackText>
            <Balancer>
              or tap the button below to sign in with a one time passcode ( OTP
              ) sent to your email address.
            </Balancer>
          </BlackText>

          <BlackHr />

          <YellowGreenButton type="button" onClick={goToOtpRoute}>
            Sign In with a OTP
          </YellowGreenButton>
        </TopMarginDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButtons;
