import useGetCartItemsSelectors from "../../hooks/selectors/use-get-cart-items-selectors";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import CheckoutTitleAndIntro from "./checkout-title-and-intro.component";
import CheckoutNoUser from "./checkout-no-user.component";
import NoCartItemsFound from "./no-cart-items-found.component";
import CheckoutCartItemsInfo from "./checkout-cart-items-info.component";
import GrandTotal from "./grand-total.component";
import CompleteOrder from "./complete-order/complete-order.component";

import { Container } from "../../styles/container/container.styles";

const Checkout = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { cartItems, grandTotal } = useGetCartItemsSelectors();

  return (
    <Container>
      <CheckoutTitleAndIntro />
      <CheckoutNoUser {...{ currentUser }} />
      <NoCartItemsFound {...{ cartItems }} />
      <CheckoutCartItemsInfo {...{ currentUser, cartItems }} />
      <GrandTotal {...{ grandTotal }} />
      <CompleteOrder />
    </Container>
  );
};

export default Checkout;
