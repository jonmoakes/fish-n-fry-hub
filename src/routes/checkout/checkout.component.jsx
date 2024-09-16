import useGetCartItemsSelectors from "../../hooks/selectors/use-get-cart-items-selectors";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useUpdateCartItemQuantityResultUseEffect from "./checkout-item/checkout-item-hooks/use-update-cart-item-quantity-result-use-effect";
import useRemoveCartItemResultUseEffect from "./checkout-item/checkout-item-hooks/use-remove-cart-item-result-use-effect";
import useSetEmailStringUseEffect from "./checkout-hooks/use-set-email-string-use-effect";
import useResetOrderToRepeatStateUseEffect from "./checkout-hooks/use-reset-order-to-repeat-state-use-effect";

import Loader from "../../components/loader/loader.component";
import CheckoutTitleAndIntro from "./checkout-title-and-intro.component";
import CheckoutNoUser from "./checkout-no-user.component";
import NoCartItemsFound from "./no-cart-items-found.component";
import CheckoutCartItemsInfo from "./checkout-cart-items-info.component";
import GrandTotal from "./grand-total.component";
import CompleteOrder from "../../components/complete-order/complete-order.component";

import { Container } from "../../styles/container/container.styles";

const Checkout = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { cartItems, grandTotal, cartItemsIsLoading } =
    useGetCartItemsSelectors();

  useUpdateCartItemQuantityResultUseEffect();
  useRemoveCartItemResultUseEffect();
  useSetEmailStringUseEffect();
  useResetOrderToRepeatStateUseEffect();

  return (
    <Container>
      {cartItemsIsLoading ? <Loader /> : null}
      <CheckoutTitleAndIntro {...{ currentUser, cartItems }} />
      <CheckoutNoUser {...{ currentUser }} />
      <NoCartItemsFound {...{ currentUser, cartItems }} />
      <CheckoutCartItemsInfo {...{ currentUser, cartItems }} />
      <GrandTotal {...{ currentUser, cartItems, grandTotal }} />
      <CompleteOrder />
    </Container>
  );
};

export default Checkout;
