import { CheckoutOptionsInfoDiv } from "../../../../../styles/div/div.styles";
import { BlackHr } from "../../../../../styles/hr/hr.styles";
import { SalmonSpan, WhiteSpan } from "../../../../../styles/span/span.styles";

const ProductPie = ({ cartItemObject }) => {
  const { hasChoosePieOption, pieChoice } = cartItemObject;

  return (
    <>
      {hasChoosePieOption ? (
        <>
          <CheckoutOptionsInfoDiv>
            <SalmonSpan>pie choice:</SalmonSpan>
          </CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">{pieChoice}</WhiteSpan>
          <BlackHr />
        </>
      ) : null}
    </>
  );
};

export default ProductPie;
