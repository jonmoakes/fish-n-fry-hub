import useCheckoutItemHooks from "../../checkout-item-hooks/use-checkout-item-hooks";

import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

const ProductSauces = ({ cartItemObject }) => {
  const {
    hasSaucesOption,
    numberOfSaucesAvailable,
    saucesChosen,
    singleSauceChosen,
  } = cartItemObject;

  const { multipleChoiceSelection } = useCheckoutItemHooks();

  return (
    <>
      {hasSaucesOption ? (
        <>
          {numberOfSaucesAvailable > 1 ? (
            <>
              <CheckoutOptionsInfoDiv>
                <SalmonSpan>sauces chosen:</SalmonSpan>
              </CheckoutOptionsInfoDiv>
              <WhiteSpan className="checkout multiple-choice">
                {multipleChoiceSelection(saucesChosen)}
              </WhiteSpan>
            </>
          ) : (
            <>
              <CheckoutOptionsInfoDiv>
                <SalmonSpan>sauce:</SalmonSpan>
              </CheckoutOptionsInfoDiv>
              <WhiteSpan className="checkout">{singleSauceChosen}</WhiteSpan>
            </>
          )}
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductSauces;
