import NetworkError from "../../../components/errors/network-error.component";
import useIsOnline from "../../../hooks/use-is-online";

import CheckoutItemProductInfo from "./checkout-item-product-info/checkout-item-product-info.component";
import IncreaseQuantity from "./increase-quantity.component";
import DecreaseQuantity from "./decrease-quantity.component";
import ClearCartItem from "./clear-cart-item.component";

import {
  CheckoutItemContainer,
  ArrowContainer,
} from "../../../styles/div/div.styles";
import { CheckoutItemText, Value } from "../../../styles/span/span.styles";

const CheckoutItem = ({ cartItems }) => {
  const { isOnline } = useIsOnline();

  return (
    <>
      {cartItems.map((item) => {
        const { $id, cartItem } = item;

        const cartItemObject = JSON.parse(cartItem);
        const { quantity, priceWithOptionsAndQuantity } = cartItemObject;

        return (
          <CheckoutItemContainer key={$id}>
            <CheckoutItemProductInfo {...{ cartItemObject }} />

            {isOnline ? (
              <ArrowContainer>
                <DecreaseQuantity {...{ $id }} />
                <Value>{quantity}</Value>
                <IncreaseQuantity {...{ $id }} />
              </ArrowContainer>
            ) : (
              <NetworkError />
            )}

            <CheckoutItemText className="width large ">
              £{(priceWithOptionsAndQuantity / 100).toFixed(2)}
            </CheckoutItemText>

            {isOnline ? <ClearCartItem {...{ $id }} /> : <NetworkError />}
          </CheckoutItemContainer>
        );
      })}
    </>
  );
};

export default CheckoutItem;
