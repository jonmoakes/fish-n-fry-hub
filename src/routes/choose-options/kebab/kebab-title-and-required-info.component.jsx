import Balancer from "react-wrap-balancer";

import { H2 } from "../../../styles/h2/h2.styles";
import { RequiredDiv } from "../../../styles/div/div.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";

const KebabTitleAndRequiredInfo = () => (
  <>
    <H2>
      <Balancer>choose kebab type</Balancer>
    </H2>
    <RequiredDiv>
      <RequiredSpan>required</RequiredSpan>
    </RequiredDiv>
  </>
);

export default KebabTitleAndRequiredInfo;
