import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";

import { menuRoute } from "../../strings/routes/routes-strings";

const ManageMenuIntro = () => (
  <ParentDiv>
    <Text>here, you can manage your menu.</Text>
    <Text>you can add or remove products or update their prices.</Text>
    <Text>
      to start, please type in a word or words of the product you want to edit.
    </Text>
    <Text>
      this should be one of the names of the products in your{" "}
      <StyledLink className="yellow" to={menuRoute}>
        menu
      </StyledLink>
    </Text>
    <Text>
      you will then be shown a list of products that match your query.
    </Text>
    <Text>then, tap on the 'edit product' button to continue.</Text>
  </ParentDiv>
);

export default ManageMenuIntro;
