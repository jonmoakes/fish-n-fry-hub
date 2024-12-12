import useSignInFormFunctions from "./sign-in-form-hooks/use-sign-in-form-functions";

import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

import { signUpRoute } from "../../strings/routes/routes-strings";

const TitleAndSignUpLink = () => {
  const { dispatchResetSignInFormState } = useSignInFormFunctions();

  return (
    <ParentDiv>
      <Title>sign in</Title>
      <BlackHr />
      <Text>
        don't have an account yet?{" "}
        <StyledLink
          onClick={dispatchResetSignInFormState}
          className="yellow"
          to={signUpRoute}
        >
          sign up!
        </StyledLink>
      </Text>
    </ParentDiv>
  );
};

export default TitleAndSignUpLink;
