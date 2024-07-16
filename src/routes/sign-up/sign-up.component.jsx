import { Navigate } from "react-router-dom";

import useHandleSignUpFormError from "./sign-up-form-hooks/use-handle-sign-up-form-error";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import Loader from "../../components/loader/loader.component";
import SignUpName from "./sign-up-name.component";
import useSignUpFormFunctions from "./sign-up-form-hooks/use-sign-up-form-functions";
import SignUpEmail from "./sign-up-email.component";
import SignUpPasswords from "./sign-up-passwords.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { signInRoute, accountRoute } from "../../strings/routes/routes-strings";
import SignUpButton from "./sign-up-button.component";

const SignUp = () => {
  useHandleSignUpFormError();
  const { currentUser, currentUserIsLoading } = useGetCurrentUserSelectors();
  const { dispatchHandleSignUpFormChange } = useSignUpFormFunctions();

  return (
    <Container>
      {currentUser !== null && <Navigate replace to={accountRoute} />}
      {currentUserIsLoading ? <Loader /> : null}

      <ParentDiv>
        <Title>sign up</Title>
        <Text>sign up below! it's quick and secure!</Text>
        <BlackHr />
        <Text>
          already have an account?{" "}
          <StyledLink className="yellow" to={signInRoute}>
            sign in!
          </StyledLink>
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Form>
          <SignUpName {...{ dispatchHandleSignUpFormChange }} />
          <SignUpEmail {...{ dispatchHandleSignUpFormChange }} />
          <SignUpPasswords {...{ dispatchHandleSignUpFormChange }} />
          <SignUpButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignUp;
