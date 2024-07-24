import Balancer from "react-wrap-balancer";

import { ProductItemDiv } from "../../styles/div/div.styles";
import { BlackHr, HrWithMargin } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { Name, Price } from "../../styles/span/span.styles";

const ChooseOptionsItemBasicInfo = ({ name, price }) => (
  <ProductItemDiv>
    <Name>{name}</Name>
    <BlackHr />
    <Text>
      <Balancer>price without options:</Balancer>
    </Text>
    <Price>£{(price / 100).toFixed(2)}</Price>
    <HrWithMargin />
  </ProductItemDiv>
);

export default ChooseOptionsItemBasicInfo;
