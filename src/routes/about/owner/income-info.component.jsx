import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ListItem, StyledUnorderedList } from "../../../styles/ul/ul.styles";

const IncomeInfo = () => (
  <ParentDiv>
    <H2 className="underline">income info</H2>
    <Text>
      on this table, you can view a list of all of your received income.
    </Text>
    <Text>you get the payees:</Text>
    <StyledUnorderedList>
      <ListItem>name</ListItem>
      <ListItem>email</ListItem>
      <ListItem>date payment received on</ListItem>
      <ListItem>a receipt url to click on</ListItem>
      <ListItem>paymentId</ListItem>
    </StyledUnorderedList>
    <Text>
      <Balancer>
        you can search for any information in this tabl and even filter by week.
      </Balancer>
    </Text>
    <Text>
      simply enter a week number 1 -52 to see all of income received in that
      week.
    </Text>
    <Text>
      <Balancer>
        a handy tool is that whatever entries are returned, the total amount of
        all orders combined is displayed automatically, making it easy to
        instantly see how much you made each week.
      </Balancer>
    </Text>
  </ParentDiv>
);

export default IncomeInfo;
