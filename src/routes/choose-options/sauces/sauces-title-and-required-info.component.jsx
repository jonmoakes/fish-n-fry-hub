import Balancer from "react-wrap-balancer";

import { H2 } from "../../../styles/h2/h2.styles";
import { RequiredDiv } from "../../../styles/div/div.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";

const SaucesTitleAndRequiredInfo = ({ numberOfSaucesAvailable }) => (
  <>
    <H2>
      <Balancer>
        choose {numberOfSaucesAvailable === 1 ? "a sauce" : "sauces"}:
      </Balancer>
    </H2>
    <RequiredDiv>
      <RequiredSpan>required</RequiredSpan>
    </RequiredDiv>
  </>
);

export default SaucesTitleAndRequiredInfo;
