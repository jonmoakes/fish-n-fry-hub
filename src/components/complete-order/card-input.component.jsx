import Balancer from "react-wrap-balancer";
import { useLocation } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";

import useGetCartItemsSelectors from "../../hooks/selectors/use-get-cart-items-selectors";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";
import useHandleCardInputChange from "./complete-payment-hooks/use-handle-card-input-change";
import useIsOnline from "../../hooks/use-is-online";

import NetworkError from "../errors/network-error.component";
import CardInputErrors from "./errors-and-redirect/card-input-errors.component";
import PlaceOrderButton from "./place-order-button.component";
import StripeLogo from "./stripe-logo.component";

import { CardInputDiv, ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { LightGreenSpan, YellowSpan } from "../../styles/span/span.styles";
import { options } from "./card-input-styles/card-input-styles";
import useGetOrderToRepeatSelectors from "../../hooks/selectors/use-get-order-to-repeat-selectors";
import { getOrderTotalBasedOnRoute } from "../../functions/get-order-total-based-on-route";
import { useState } from "react";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const CardInput = () => {
  const { handlePaymentError } = useGetHandlePaymentSelectors();
  const { grandTotal } = useGetCartItemsSelectors();
  const { repeatOrderGrandTotal } = useGetOrderToRepeatSelectors();
  const { isOnline } = useIsOnline();
  const { handleCardInputChange } = useHandleCardInputChange();

  const [userHasConfirmed, setUserHasConfirmed] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const orderTotal = getOrderTotalBasedOnRoute(
    path,
    grandTotal,
    repeatOrderGrandTotal
  );

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : handlePaymentError ? null : orderTotal ? (
        <>
          {userHasConfirmed ? (
            <>
              <CardInputErrors />
              <ParentDiv>
                <Text>
                  your card will be charged
                  <br />
                  <YellowSpan>£{(orderTotal / 100).toFixed(2)}</YellowSpan>
                </Text>

                <Text>
                  <Balancer>
                    please enter your card details and then press the 'place
                    order' button when it appears.
                  </Balancer>
                </Text>
                <Text>
                  use '<LightGreenSpan>4242 4242 4242 4242</LightGreenSpan>' as
                  the card number,{" "}
                  <LightGreenSpan>any date in the future</LightGreenSpan> for
                  the expiry and any <LightGreenSpan>3 numbers</LightGreenSpan>{" "}
                  for the ccv.
                </Text>
                <CardInputDiv>
                  <CardElement
                    {...{ options }}
                    onChange={handleCardInputChange}
                  />
                </CardInputDiv>
                <PlaceOrderButton />
                <StripeLogo />
              </ParentDiv>
            </>
          ) : (
            <ParentDiv>
              <Text>
                <Balancer>
                  please confirm that you understand that this app is a
                  demonstration app and that the order and the payment are not
                  real items / payments.
                </Balancer>
              </Text>

              <YellowGreenButton onClick={() => setUserHasConfirmed(true)}>
                i understand
              </YellowGreenButton>
            </ParentDiv>
          )}
        </>
      ) : null}
    </>
  );
};

export default CardInput;
