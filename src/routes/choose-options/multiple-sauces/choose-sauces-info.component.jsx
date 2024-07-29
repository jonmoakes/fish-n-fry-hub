import Balancer from "react-wrap-balancer";

import { WhiteSpan } from "../../../styles/span/span.styles";

const ChooseSaucesInfo = ({ numberOfCheckboxesChosen, noSauceChecked }) => (
  <>
    {numberOfCheckboxesChosen() <= 3 && !noSauceChecked ? (
      <WhiteSpan>
        <Balancer>( choose up to 3 )</Balancer>
      </WhiteSpan>
    ) : noSauceChecked ? (
      <WhiteSpan>
        <Balancer>to show all sauces again, uncheck the box below</Balancer>
      </WhiteSpan>
    ) : null}
  </>
);

export default ChooseSaucesInfo;
