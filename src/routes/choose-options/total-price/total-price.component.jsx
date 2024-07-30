import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import { ParentDiv } from "../../../styles/div/div.styles";
import { WhiteH2, TotalPriceH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import Balancer from "react-wrap-balancer";
import { YellowShadowSpan } from "../../../styles/span/span.styles";

const TotalPrice = () => {
  const { calculatePrice } = useChooseOptionsFunctions();

  return (
    <ParentDiv>
      <WhiteH2>
        <Balancer>
          total price
          <br />
          <YellowShadowSpan className="small">
            ( inc options if applicable & quantity )
          </YellowShadowSpan>
        </Balancer>
      </WhiteH2>
      <BlackHr />

      <TotalPriceH2>£{(calculatePrice() / 100).toFixed(2)}</TotalPriceH2>
    </ParentDiv>
  );
};

export default TotalPrice;
