import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

const ProductSpecialInstructions = ({ cartItemObject }) => {
  const { specialInstructions } = cartItemObject;

  return (
    <>
      {specialInstructions ? (
        <>
          <CheckoutOptionsInfoDiv>
            <SalmonSpan>Special Instructions :</SalmonSpan>
          </CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">{specialInstructions}</WhiteSpan>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductSpecialInstructions;
