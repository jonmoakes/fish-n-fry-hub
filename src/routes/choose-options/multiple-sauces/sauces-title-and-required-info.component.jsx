import Balancer from "react-wrap-balancer";

import { H2 } from "../../../styles/h2/h2.styles";
import { RequiredDiv } from "../../../styles/div/div.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";

const SaucesTitleAndRequiredInfo = () => (
  <>
    <H2>
      <Balancer>choose sauces:</Balancer>
    </H2>
    <RequiredDiv>
      <RequiredSpan>required</RequiredSpan>
    </RequiredDiv>
  </>
);

export default SaucesTitleAndRequiredInfo;
