import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

const ProductSize = ({ cartItemObject }) => {
  const { hasSizeOption, sizeChoice } = cartItemObject;

  return (
    <>
      {hasSizeOption ? (
        <>
          <CheckoutOptionsInfoDiv>
            <SalmonSpan>size:</SalmonSpan>
          </CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">{sizeChoice}</WhiteSpan>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductSize;
