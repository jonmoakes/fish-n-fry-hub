import useHandleSignInFormSubmit from "./sign-in-form-hooks/use-handle-sign-in-form-submit";
// import useSignInFormFunctions from "./sign-in-form-hooks/use-sign-in-form-functions.js";
import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../../components/errors/network-error.component";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { ForgotPasswordDiv, TopMarginDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { forgotPasswordRequestRoute } from "../../strings/routes/routes-strings";
// import { BlackText } from "../../styles/p/p.styles";

const SignInButton = () => {
  const { handleSignInFormSubmit } = useHandleSignInFormSubmit();
  // const { signInWithSocial } = useSignInFormFunctions();
  const { isOnline } = useIsOnline();

  return (
    <>
      {isOnline ? (
        <TopMarginDiv>
          <YellowGreenButton type="button" onClick={handleSignInFormSubmit}>
            Sign In
          </YellowGreenButton>
          <BlackHr />

          {/* <BlackText>or sign in with a social account!</BlackText>
          <YellowGreenButton
            className="google"
            type="button"
            onClick={() => signInWithSocial("google")}
          >
            Sign in with Google
          </YellowGreenButton>

          <YellowGreenButton
            className="facebook"
            type="button"
            onClick={() => signInWithSocial("facebook")}
          >
            Sign in with Facebook
          </YellowGreenButton> */}

          {/* <BlackHr /> */}

          <ForgotPasswordDiv>
            <StyledLink to={forgotPasswordRequestRoute}>
              forgot password?
            </StyledLink>
          </ForgotPasswordDiv>
        </TopMarginDiv>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

export default SignInButton;
