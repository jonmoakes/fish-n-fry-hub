import { ParentDiv } from "../../styles/div/div.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";

import { menuRoute } from "../../strings/routes/routes-strings";

const PageHasBeenReloaded = () => (
  <ParentDiv>
    <Text>sorry, we couldn't fetch our menu for this category.</Text>
    <Text>
      the most likely scenario here is that the page was reloaded, which causes
      the data to be lost.
    </Text>
    <Text>
      please{" "}
      <StyledLink className="yellow" to={menuRoute}>
        tap here
      </StyledLink>{" "}
      to go back to the main menu and choose a category again.
    </Text>
    <Text>
      please don't reload the page when on the individual category items page.
    </Text>
  </ParentDiv>
);

export default PageHasBeenReloaded;
