import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

import { menuRoute } from "../../strings/routes/routes-strings";

const NoCartItemsFound = ({ currentUser, cartItems }) => (
  <>
    {currentUser && cartItems && !cartItems.length ? (
      <ParentDiv>
        <Text>you have no items in your cart.</Text>
        <Text>
          <StyledLink className="yellow" to={menuRoute}>
            add an item
          </StyledLink>
        </Text>
      </ParentDiv>
    ) : null}
  </>
);

export default NoCartItemsFound;
