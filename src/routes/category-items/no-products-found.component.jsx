import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

import { menuRoute } from "../../strings/routes/routes-strings";

const NoProductsFound = () => (
  <ParentDiv>
    <Text>we couldn't find any products.</Text>
    <Text>
      tap{" "}
      <StyledLink className="yellow" to={menuRoute}>
        here
      </StyledLink>{" "}
      to return to the category selection page.
    </Text>
  </ParentDiv>
);

export default NoProductsFound;
