import { StyledLink } from "../../styles/link/link.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { H2 } from "../../styles/h2/h2.styles";

import { menuRoute } from "../../strings/routes/routes-strings";

const OrderOnlineInfo = () => (
  <>
    <ParentDiv>
      <BlackHr />
      <H2>quality take away food!</H2>
      <Text>order online and beat the queue - fast and secure!</Text>
      <StyledLink to={menuRoute}>
        <YellowGreenButton>view our menu</YellowGreenButton>
      </StyledLink>
      <BlackHr />
    </ParentDiv>
  </>
);

export default OrderOnlineInfo;
