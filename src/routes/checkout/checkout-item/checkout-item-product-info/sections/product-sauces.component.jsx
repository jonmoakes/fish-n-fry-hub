import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

import { getMultipleChoiceSelectionString } from "../../../../../functions/get-multiple-choice-selection-string";

const ProductSauces = ({ cartItemObject }) => {
  const {
    hasSaucesOption,
    numberOfSaucesAvailable,
    saucesChosen,
    singleSauceChosen,
  } = cartItemObject;

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
                {getMultipleChoiceSelectionString(saucesChosen)}
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
