import {
  CheckoutPageHeaderDiv,
  HeaderNameDiv,
  HeaderQuantityDiv,
  HeaderPriceDiv,
  HeaderClearItemDiv,
} from "../../styles/div/div.styles";
import { CheckoutHeadingSpan } from "../../styles/span/span.styles";

const CheckoutHeaderBlock = () => (
  <CheckoutPageHeaderDiv>
    <HeaderNameDiv>
      <CheckoutHeadingSpan>Name</CheckoutHeadingSpan>
    </HeaderNameDiv>

    <HeaderQuantityDiv>
      <CheckoutHeadingSpan>Quantity</CheckoutHeadingSpan>
    </HeaderQuantityDiv>

    <HeaderPriceDiv>
      <CheckoutHeadingSpan>Price</CheckoutHeadingSpan>
    </HeaderPriceDiv>

    <HeaderClearItemDiv>
      <CheckoutHeadingSpan>&#128465;</CheckoutHeadingSpan>
    </HeaderClearItemDiv>
  </CheckoutPageHeaderDiv>
);

export default CheckoutHeaderBlock;
