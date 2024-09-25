import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

const CheckoutProcess = () => (
  <ParentDiv>
    <H2 className="underline">checkout process</H2>
    <Text>
      once in the checkout, the user can adjust quantities or completely remove
      an item.
    </Text>
    <Text>
      <Balancer>
        the price is updated in realtime both for the product itself ( if they
        change quantity ), and the grand total which is just above the card
        details input.
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        once again, this gives the user no nasty surprises as to how much they
        are going to be charged if they have made a mistake regarding quantity
        etc.
      </Balancer>
    </Text>
    <Text>
      our payment processor uses{" "}
      <a className="red" href="https://stripe.com/gb">
        stripe
      </a>
      , one of the world leaders in processing online payments.
    </Text>
    <Text>
      <Balancer>
        this means that your customers can be confident in safe transactions and
        you have full control over any disputes that may arise.
      </Balancer>
    </Text>
  </ParentDiv>
);

export default CheckoutProcess;
