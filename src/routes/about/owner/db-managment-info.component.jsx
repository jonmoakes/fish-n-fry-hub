import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ListItem, StyledUnorderedList } from "../../../styles/ul/ul.styles";

const DbManagementInfo = () => (
  <ParentDiv>
    <H2 className="underline">database management</H2>
    <Text>a really powerful feature is the database management section.</Text>
    <Text>here, you can:</Text>
    <StyledUnorderedList>
      <ListItem>add, delete or edit menu items</ListItem>
      <ListItem>update prices</ListItem>
      <ListItem>delete users</ListItem>
      <ListItem>create orders manually</ListItem>
      <ListItem>send emails manually</ListItem>
      <ListItem>and more!</ListItem>
    </StyledUnorderedList>

    <Text>
      <Balancer>
        creating orders manually is a useful feature in the unlikely event of
        where a payment is taken but the data doesn't get added to the database.
      </Balancer>
    </Text>
    <Text>in this case, you receive an email with the order details.</Text>
    <Text>
      You copy and past these values into a form and then the order is added to
      the database.
    </Text>
    <Text>
      these events are highly unlikely, but it is good to know that all
      eventualities have been covered if there is for example a network error
      outside of the apps control.
    </Text>
  </ParentDiv>
);

export default DbManagementInfo;
