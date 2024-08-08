import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";

const CheckoutTitleAndIntro = ({ currentUser, cartItems }) => (
  <ParentDiv>
    <Title>checkout</Title>
    <BlackHr />

    {currentUser && cartItems && cartItems.length ? (
      <>
        <Text>
          the price for each item listed is:
          <br />( base product price &#43; any selected options ) &times;
          quantity
        </Text>
        <Text>
          please review your cart items and then enter in your card details at
          the bottom of the page.
        </Text>
      </>
    ) : null}
  </ParentDiv>
);

export default CheckoutTitleAndIntro;
