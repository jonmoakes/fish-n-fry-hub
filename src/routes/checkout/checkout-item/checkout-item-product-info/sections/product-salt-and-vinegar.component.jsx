import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

const ProductSaltAndVinegar = ({ cartItemObject }) => {
  const { hasSaltAndVinegarOption, saltAndVinegarChoice } = cartItemObject;

  return (
    <>
      {hasSaltAndVinegarOption ? (
        <>
          <CheckoutOptionsInfoDiv>
            <SalmonSpan>salt & vinegar:</SalmonSpan>
          </CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">{saltAndVinegarChoice}</WhiteSpan>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductSaltAndVinegar;
