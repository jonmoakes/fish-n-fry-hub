import Balancer from "react-wrap-balancer";

import useSignInEmailOtpRequestResultUseEffect from "./sign-in-email-otp-hooks/use-sign-in-email-otp-request-result-use-effect";
import useSignInEmailOtpResultUseEffect from "./sign-in-email-otp-hooks/use-sign-in-email-otp-result-use-effect";

import useSignInEmailOtpFunctions from "./sign-in-email-otp-hooks/use-sign-in-email-otp-functions";

import OtpNavAndLoader from "./otp-nav-and-loader.component";
import OtpAccordion from "./otp-accordion.component";
import EmailInputAndRequestButton from "./email-input-and-request-button.component";
import EmailSentInstructions from "./email-sent-instructions.component";
import OtpInputAndConfirmButton from "./otp-input-and-confirm-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { Title } from "../../styles/h1/h1.styles";

const SignInEmailOtp = () => {
  useSignInEmailOtpRequestResultUseEffect();
  useSignInEmailOtpResultUseEffect();

  const {
    emailOtpUserId,
    email,
    dispatchHandleSignInFormOtpChange,
    requestSignInEmailOtpThunk,
    otp,
    signInWithOtp,
  } = useSignInEmailOtpFunctions();

  return (
    <Container>
      <OtpNavAndLoader />

      <ParentDiv>
        <Title>
          <Balancer>sign in with a one time passcode</Balancer>
        </Title>
      </ParentDiv>

      <ParentDiv>
        <OtpAccordion />
        <Form className="no-margin-top">
          <EmailInputAndRequestButton
            {...{
              emailOtpUserId,
              email,
              dispatchHandleSignInFormOtpChange,
              requestSignInEmailOtpThunk,
            }}
          />

          <EmailSentInstructions {...{ emailOtpUserId }} />

          <OtpInputAndConfirmButton
            {...{
              emailOtpUserId,
              otp,
              dispatchHandleSignInFormOtpChange,
              signInWithOtp,
            }}
          />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignInEmailOtp;
