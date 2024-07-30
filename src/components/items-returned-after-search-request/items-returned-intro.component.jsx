import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../styles/div/div.styles";
import { WhiteH2 } from "../../styles/h2/h2.styles";
import { WhiteSpan } from "../../styles/span/span.styles";

const ItemsReturnedIntro = () => (
  <ParentDiv>
    <WhiteH2>
      <Balancer>we found the following items:</Balancer>
    </WhiteH2>
    <WhiteSpan>&darr; &darr;</WhiteSpan>
  </ParentDiv>
);

export default ItemsReturnedIntro;
