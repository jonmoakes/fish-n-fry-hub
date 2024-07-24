import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { WhiteSpan } from "../../styles/span/span.styles";

const ItemsReturnedIntro = () => (
  <ParentDiv>
    <H2 className="no-underline">
      <Balancer>we found the following items:</Balancer>
    </H2>
    <WhiteSpan>&darr; &darr;</WhiteSpan>
  </ParentDiv>
);

export default ItemsReturnedIntro;
