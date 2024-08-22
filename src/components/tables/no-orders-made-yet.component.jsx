import { contactRoute } from "../../strings/routes/routes-strings";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

const NoOrdersMadeYet = () => (
  <ParentDiv>
    <H2>no orders found</H2>
    <Text>
      if you think that there should be orders here, please tap the button below
      to reload the page, or{" "}
      <StyledLink className="yellow" to={contactRoute}>
        contact us
      </StyledLink>{" "}
      if the problem persists.
    </Text>
    <YellowGreenButton onClick={() => window.location.reload()}>
      reload
    </YellowGreenButton>
  </ParentDiv>
);

export default NoOrdersMadeYet;
