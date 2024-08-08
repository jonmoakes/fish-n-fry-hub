import useCheckoutItemLogic from "../../checkout-item-hooks/use-checkout-item-logic";

import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

const ProductMeats = ({ cartItemObject }) => {
  const {
    hasMeatsOption,
    numberOfMeatsAvailable,
    meatsChosen,
    singleMeatChosen,
  } = cartItemObject;

  const { multipleChoiceSelection } = useCheckoutItemLogic();

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
                {multipleChoiceSelection(meatsChosen)}
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
