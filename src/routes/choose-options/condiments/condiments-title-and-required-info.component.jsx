import Balancer from "react-wrap-balancer";

import { H2 } from "../../../styles/h2/h2.styles";
import { RequiredDiv } from "../../../styles/div/div.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";

const CondimentsTitleAndRequiredInfo = ({ numberOfCondimentsAvailable }) => (
  <>
    <H2>
      <Balancer>
        choose{" "}
        {numberOfCondimentsAvailable === 1
          ? "a condiment"
          : `${numberOfCondimentsAvailable} condiments`}
        :
      </Balancer>
    </H2>
    <RequiredDiv>
      <RequiredSpan>required</RequiredSpan>
    </RequiredDiv>
  </>
);

export default CondimentsTitleAndRequiredInfo;
