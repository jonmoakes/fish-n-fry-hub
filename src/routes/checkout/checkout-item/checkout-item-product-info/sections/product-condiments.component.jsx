import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

import { getMultipleChoiceSelectionString } from "../../../../../functions/get-multiple-choice-selection-string";

const ProductCondiments = ({ cartItemObject }) => {
  const {
    hasCondimentsOption,
    numberOfCondimentsAvailable,
    condimentsChosen,
    singleCondimentChosen,
  } = cartItemObject;

  return (
    <>
      {hasCondimentsOption ? (
        <>
          {numberOfCondimentsAvailable > 1 ? (
            <>
              <CheckoutOptionsInfoDiv>
                <SalmonSpan>condiments chosen:</SalmonSpan>
              </CheckoutOptionsInfoDiv>
              <WhiteSpan className="checkout multiple-choice">
                {getMultipleChoiceSelectionString(condimentsChosen)}
              </WhiteSpan>
            </>
          ) : (
            <>
              <CheckoutOptionsInfoDiv>
                <SalmonSpan>condiment:</SalmonSpan>
              </CheckoutOptionsInfoDiv>
              <WhiteSpan className="checkout">
                {singleCondimentChosen}
              </WhiteSpan>
            </>
          )}
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductCondiments;
