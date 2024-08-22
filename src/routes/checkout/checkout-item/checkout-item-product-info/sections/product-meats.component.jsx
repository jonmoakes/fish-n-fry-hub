import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

import { getMultipleChoiceSelectionString } from "../../../../../functions/get-multiple-choice-selection-string";

const ProductMeats = ({ cartItemObject }) => {
  const {
    hasMeatsOption,
    numberOfMeatsAvailable,
    meatsChosen,
    singleMeatChosen,
  } = cartItemObject;

  return (
    <>
      {hasMeatsOption ? (
        <>
          {numberOfMeatsAvailable > 1 ? (
            <>
              <CheckoutOptionsInfoDiv>
                <SalmonSpan>meats chosen:</SalmonSpan>
              </CheckoutOptionsInfoDiv>
              <WhiteSpan className="checkout multiple-choice">
                {getMultipleChoiceSelectionString(meatsChosen)}
              </WhiteSpan>
            </>
          ) : (
            <>
              <CheckoutOptionsInfoDiv>
                <SalmonSpan>meat:</SalmonSpan>
              </CheckoutOptionsInfoDiv>
              <WhiteSpan className="checkout">{singleMeatChosen}</WhiteSpan>
            </>
          )}
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductMeats;
