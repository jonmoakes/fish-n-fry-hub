import Balancer from "react-wrap-balancer";

import useHandleSignInFormError from "./sign-in-form-hooks/use-handle-sign-in-form-error";
import useSignInFormFunctions from "./sign-in-form-hooks/use-sign-in-form-functions";

import NavAndLoader from "./nav-and-loader.component";
import TitleAndSignUpLink from "./title-and-sign-up-link.component";
import SignInEmail from "./sign-in-email.component";
import SignInPassword from "./sign-in-password.component";
import SignInButtons from "./sign-in-buttons.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { Text } from "../../styles/p/p.styles";

const SignIn = () => {
  useHandleSignInFormError();
  const { dispatchHandleSignInFormChange } = useSignInFormFunctions();

  return (
    <Container>
      <NavAndLoader />

      <TitleAndSignUpLink />

      <ParentDiv>
        <Text>
          <Balancer>
            please enter your email and password and then tap the sign in
            button.
          </Balancer>
        </Text>
        <Text>Or choose from other methods to sign in below!</Text>

        <Form className="small-margin-top">
          <SignInEmail {...{ dispatchHandleSignInFormChange }} />
          <SignInPassword {...{ dispatchHandleSignInFormChange }} />
          <SignInButtons />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignIn;
