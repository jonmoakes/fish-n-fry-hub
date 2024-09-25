import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ListItem, StyledUnorderedList } from "../../../styles/ul/ul.styles";

const OwnerTable = () => (
  <ParentDiv>
    <H2 className="underline">owner orders table</H2>
    <Text>what about for you, the busy app owner?</Text>
    <Text>
      you receive a very similar table of all of your orders but with extra
      details.
    </Text>
    <Text>
      as well as the details of the actual order so that you know what to cook,
      you get the:
    </Text>
    <StyledUnorderedList>
      <ListItem>date & time that the order was placed</ListItem>
      <ListItem>
        <Balancer>
          the customers name and email ( and phone if you require it )
        </Balancer>
      </ListItem>
      <ListItem>price of the order</ListItem>
      <ListItem>an order id</ListItem>
      <ListItem>an order status</ListItem>
    </StyledUnorderedList>
    <Text>
      the order details, date, name, email & phone are obviously self
      explanitory.
    </Text>
    <Text>
      <Balancer>
        one useful thing though is that you only need to tap on a users email or
        phone number in order to open your own email / phone app with the users
        email address / phone number automatically entered in.
      </Balancer>
    </Text>
    <Text>
      this one touch contact ability saves time having to manually key in a user
      email or phone number.
    </Text>
    <Text>
      the order id is useful so that if a user queries their order, you only
      need to search for the order id to find it instantly.
    </Text>
    <Text>
      the order status is a simple button where you can mark an order as
      completed for your reference.
    </Text>
    <Text>
      you only get orders that have been placed on the current date, which saves
      unnecessary fetching of data.{" "}
    </Text>
    <Text>
      however, you can also access every order you have ever made should you
      need to on a separate page.
    </Text>
  </ParentDiv>
);

export default OwnerTable;
