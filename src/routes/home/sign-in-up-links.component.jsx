import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import { ParentDiv } from "../../styles/div/div.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { signInRoute, signUpRoute } from "../../strings/routes/routes-strings";

const SignInUpLinks = () => {
  const { currentUser } = useGetCurrentUserSelectors();

  return (
    <>
      {!currentUser ? (
        <ParentDiv>
          <BlackHr />
          <Text>already have an account?</Text>
          <StyledLink to={signInRoute}>
            <YellowGreenButton>sign in!</YellowGreenButton>
          </StyledLink>
          <Text>or</Text>
          <StyledLink to={signUpRoute}>
            <YellowGreenButton>sign up!</YellowGreenButton>
          </StyledLink>

          <Text>it's quick and easy!</Text>
          <BlackHr />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default SignInUpLinks;
