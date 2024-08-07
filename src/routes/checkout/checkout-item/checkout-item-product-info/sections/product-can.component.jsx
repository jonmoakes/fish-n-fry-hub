import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

import { replacePartOfString } from "../../../../../functions/replace-part-of-string";

const ProductCan = ({ cartItemObject }) => {
  const { hasChooseCanOption, canChoice } = cartItemObject;

  return (
    <>
      {hasChooseCanOption ? (
        <>
          <CheckoutOptionsInfoDiv>
            <SalmonSpan>can choice:</SalmonSpan>
          </CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">
            {replacePartOfString(canChoice, "( can )", "")}
          </WhiteSpan>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductCan;
