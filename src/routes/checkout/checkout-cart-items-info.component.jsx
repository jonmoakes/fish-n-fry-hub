import CheckoutItem from "./checkout-item/checkout-item.component";

import {
  CheckoutPageDiv,
  CheckoutPageHeaderDiv,
  HeaderClearItemDiv,
  HeaderNameDiv,
  HeaderPriceDiv,
  HeaderQuantityDiv,
} from "../../styles/div/div.styles";
import { CheckoutHeadingSpan } from "../../styles/span/span.styles";

const CheckoutCartItemsInfo = ({ currentUser, cartItems }) => (
  <>
    {currentUser && cartItems && cartItems.length ? (
      <>
        <CheckoutPageDiv>
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

          <CheckoutItem {...{ cartItems }} />
        </CheckoutPageDiv>
      </>
    ) : null}
  </>
);

export default CheckoutCartItemsInfo;
