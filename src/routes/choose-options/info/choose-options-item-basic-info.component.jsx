import Balancer from "react-wrap-balancer";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";

import { ProductItemDiv } from "../../../styles/div/div.styles";
import { BlackHr, HrWithMargin } from "../../../styles/hr/hr.styles";
import { Text } from "../../../styles/p/p.styles";
import { Name, Price } from "../../../styles/span/span.styles";

const ChooseOptionsItemBasicInfo = () => {
  const { name, price } = useChooseOptionsVariables();

  return (
    <ProductItemDiv>
      <Name className="yellow">
        <Balancer>{name}</Balancer>
      </Name>
      <BlackHr />
      <Text>
        <Balancer>price without options:</Balancer>
      </Text>
      <Price>£{(price / 100).toFixed(2)}</Price>
      <HrWithMargin />
    </ProductItemDiv>
  );
};

export default ChooseOptionsItemBasicInfo;
