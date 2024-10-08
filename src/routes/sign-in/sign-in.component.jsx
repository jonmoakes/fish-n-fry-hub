import { Navigate } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import useHandleSignInFormError from "./sign-in-form-hooks/use-handle-sign-in-form-error";
import useSignInFormFunctions from "./sign-in-form-hooks/use-sign-in-form-functions";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import SignInEmail from "./sign-in-email.component";
import SignInPassword from "./sign-in-password.component";
import SignInButton from "./sign-in-button.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form } from "../../styles/form/form.styles";
import { Title } from "../../styles/h1/h1.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { appOwnerId } from "../../constants/constants";
import {
  accountRoute,
  menuRoute,
  signUpRoute,
} from "../../strings/routes/routes-strings";
import { useDispatch } from "react-redux";
import { resetSignInFormState } from "../../store/sign-in-form/sign-in-form.slice";

const SignIn = () => {
  const { currentUser, currentUserIsLoading, id } =
    useGetCurrentUserSelectors();
  useHandleSignInFormError();
  const { dispatchHandleSignInFormChange } = useSignInFormFunctions();
  const dispatch = useDispatch();

  return (
    <Container>
      {currentUser &&
        (id === appOwnerId ? (
          <Navigate replace to={accountRoute} />
        ) : (
          <Navigate replace to={menuRoute} />
        ))}
      {currentUserIsLoading ? (
        <SkeletonBox loadingText="Signing You In..." />
      ) : null}

      <ParentDiv>
        <Title>sign in</Title>
        <BlackHr />
        <Text>
          don't have an account yet?{" "}
          <StyledLink
            onClick={() => dispatch(resetSignInFormState())}
            className="yellow"
            to={signUpRoute}
          >
            sign up!
          </StyledLink>
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Form>
          <SignInEmail {...{ dispatchHandleSignInFormChange }} />
          <SignInPassword {...{ dispatchHandleSignInFormChange }} />
          <SignInButton />
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default SignIn;
