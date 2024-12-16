import useHandleSignInFormSubmit from "./sign-in-form-hooks/use-handle-sign-in-form-submit";
import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { ForgotPasswordDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { forgotPasswordRequestRoute } from "../../strings/routes/routes-strings";
import OtherSignInOptions from "../../components/other-sign-in-options/other-sign-in-options.component";

const SignInButtons = () => {
  const { handleSignInFormSubmit } = useHandleSignInFormSubmit();

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
          <OtherSignInOptions />
        </TopMarginDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButtons;
