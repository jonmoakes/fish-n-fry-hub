import useGetCartItemsSelectors from "../../hooks/selectors/use-get-cart-items-selectors";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import { menuRoute } from "../../strings/routes/routes-strings";
import { Container } from "../../styles/container/container.styles";
import { CheckoutPageDiv, ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";
import CheckoutItem from "./checkout-item/checkout-item.component";
import CheckoutHeaderBlock from "./checkout-page-header-block.component";

import { BlackHr } from "../../styles/hr/hr.styles";

const Checkout = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { cartItems } = useGetCartItemsSelectors();

  return (
    <Container>
      <ParentDiv>
        <Title>checkout</Title>
        <BlackHr />
        <Text>
          the price for each item listed is:
          <br />( base product price &#43; any selected options ) &times;
          quantity
        </Text>
      </ParentDiv>

      {!currentUser ? (
        <ParentDiv>
          <Text>
            you need to be signed in in order to see the checkout page.
          </Text>
        </ParentDiv>
      ) : null}

      {currentUser && cartItems && !cartItems.length ? (
        <ParentDiv>
          <Text>you have no items in your cart.</Text>
          <Text>
            <StyledLink className="yellow" to={menuRoute}>
              add an item
            </StyledLink>
          </Text>
        </ParentDiv>
      ) : null}

      {currentUser && cartItems && cartItems.length ? (
        <>
          <CheckoutPageDiv>
            <CheckoutHeaderBlock />
            <CheckoutItem {...{ cartItems }} />
          </CheckoutPageDiv>
        </>
      ) : null}
    </Container>
  );
};

export default Checkout;
