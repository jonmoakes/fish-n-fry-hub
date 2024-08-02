import Balancer from "react-wrap-balancer";

import { WhiteSpan } from "../../../styles/span/span.styles";

const ChooseSaucesInfo = ({
  numberOfSaucesAvailable,
  numberOfSaucesCheckboxesChosen,
  noSauceChecked,
}) => (
  <>
    {numberOfSaucesCheckboxesChosen() <= numberOfSaucesAvailable &&
    !noSauceChecked ? (
      <WhiteSpan>
        <Balancer>( choose up to {numberOfSaucesAvailable} )</Balancer>
      </WhiteSpan>
    ) : noSauceChecked ? (
      <WhiteSpan>
        <Balancer>to show all sauces again, uncheck the box below</Balancer>
      </WhiteSpan>
    ) : null}
  </>
);

export default ChooseSaucesInfo;
