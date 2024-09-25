import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";

const EmailInfo = () => (
  <ParentDiv>
    <H2 className="underline">order confirmation</H2>
    <Text>
      <Balancer>
        after the completion of the payment, a user is prompted as to whether
        they wish to receive an email containing the details of their order and
        then having chosen, returned to their orders page.
      </Balancer>
    </Text>
  </ParentDiv>
);

export default EmailInfo;
