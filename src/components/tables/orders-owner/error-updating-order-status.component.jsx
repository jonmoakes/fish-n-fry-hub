import { useLocation } from "react-router-dom";
import useOrdersOwnerLogic from "./orders-owner-hooks/use-orders-owner-logic";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";

import {
  contactRoute,
  ordersOwnerAllTimeOrdersRoute,
} from "../../../strings/routes/routes-strings";

const ErrorUpdatingOrderStatus = () => {
  const { updateOrderStatusError, resetOrderStatusResultAndError } =
    useOrdersOwnerLogic();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path === ordersOwnerAllTimeOrdersRoute ? null : (
        <ParentDiv>
          <Text>there was an error updating the order status.</Text>
          <Text>the error received was:</Text>
          <Text>
            '<RedSpan>{updateOrderStatusError}</RedSpan>'
          </Text>
          <Text>
            please try again or{" "}
            <StyledLink className="yellow" to={contactRoute}>
              contact us
            </StyledLink>{" "}
            if the error persists.
          </Text>
          <Text>
            tap the button below to show the table so that you can try again.
          </Text>
          <YellowGreenButton onClick={resetOrderStatusResultAndError}>
            continue
          </YellowGreenButton>
        </ParentDiv>
      )}
    </>
  );
};

export default ErrorUpdatingOrderStatus;
