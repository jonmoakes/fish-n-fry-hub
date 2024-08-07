import useCheckoutItemHooks from "../../checkout-item-hooks/use-checkout-item-hooks";

import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

const ProductCondiments = ({ cartItemObject }) => {
  const {
    hasCondimentsOption,
    numberOfCondimentsAvailable,
    condimentsChosen,
    singleCondimentChosen,
  } = cartItemObject;

  const { multipleChoiceSelection } = useCheckoutItemHooks();

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
                {multipleChoiceSelection(condimentsChosen)}
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
