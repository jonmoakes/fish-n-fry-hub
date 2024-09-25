import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";

const CustomerOrdersInfo = () => (
  <ParentDiv>
    <H2 className="underline">orders table</H2>
    <Text>
      <Balancer>
        on the customers orders page, they are presented with a table of all of
        their previous orders.
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        they can search their orders and even reorder a previous meal ( useful
        for convenience instead of having to keep adding a regular meal to the
        cart ) in one tap!
      </Balancer>
    </Text>
  </ParentDiv>
);

export default CustomerOrdersInfo;
