import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { signInRoute } from "../../strings/routes/routes-strings";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";

const SocialSignInFail = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <Container>
      <ParentDiv>
        <Title>error signing in....</Title>
        <Text>sorry, there was an error signing you in..</Text>
        <Text>please try again or contact us if the error persists.</Text>
        <YellowGreenButton
          type="button"
          onClick={() => hamburgerHandlerNavigate(signInRoute)}
        ></YellowGreenButton>
      </ParentDiv>
    </Container>
  );
};

export default SocialSignInFail;
