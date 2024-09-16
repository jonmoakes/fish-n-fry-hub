import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";

import {
  contactRoute,
  ordersCustomerRoute,
} from "../../strings/routes/routes-strings";
import { StyledLink } from "../../styles/link/link.styles";

const NoRepeatOrderFound = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  return (
    <ParentDiv>
      <H2>no data found</H2>
      <Text>have you recently reloaded the page?</Text>
      <Text>if so this will cause the data not to be fetched.</Text>
      <Text>please don't reload this page in order to avoid loss of data.</Text>
      <Text>
        if you haven't reloaded the page however and you keep seeing this error,
        please{" "}
        <StyledLink className="yellow" to={contactRoute}>
          contact us
        </StyledLink>
      </Text>
      <Text>
        please tap the button below to return to your orders page and try again.
      </Text>

      <YellowGreenButton
        onClick={() => hamburgerHandlerNavigate(ordersCustomerRoute)}
      >
        back to orders
      </YellowGreenButton>
    </ParentDiv>
  );
};

export default NoRepeatOrderFound;
