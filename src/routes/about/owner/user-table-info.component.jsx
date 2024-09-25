import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ListItem, StyledUnorderedList } from "../../../styles/ul/ul.styles";

const UserTableInfo = () => (
  <ParentDiv>
    <H2 className="underline">users table</H2>
    <Text>
      on the users table, you can easily find any information on any of your
      users including:
    </Text>
    <StyledUnorderedList>
      <ListItem>name</ListItem>
      <ListItem>email</ListItem>
      <ListItem>phone number</ListItem>
      <ListItem>user id</ListItem>
      <ListItem>created on date</ListItem>
    </StyledUnorderedList>
    <Text>
      <Balancer>
        once again, you can simply tap on a users email or phone number in order
        to open your devices own email / phone app with the users email address
        / phone number automatically entered in.
      </Balancer>
    </Text>
    <Text>
      you can also easily search any information within this table using the
      search bar.
    </Text>
  </ParentDiv>
);

export default UserTableInfo;
