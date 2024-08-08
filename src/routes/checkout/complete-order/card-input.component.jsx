import { CardElement } from "@stripe/react-stripe-js";

import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";
import useGetHandlePaymentSelectors from "../../../hooks/selectors/use-get-handle-payment-selectors";
import useHandleCardInputChange from "./complete-payment-hooks/use-handle-card-input-change";
import useIsOnline from "../../../hooks/use-is-online";

import NetworkError from "../../../components/errors/network-error.component";
import CardInputErrors from "./errors-and-redirect/card-input-errors.component";
import PlaceOrderButton from "./place-order-button.component";
import StripeLogo from "./stripe-logo.component";

import { CardInputDiv, ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { options } from "./card-input-styles/card-input-styles";
import Balancer from "react-wrap-balancer";

const CardInput = () => {
  const { handlePaymentError } = useGetHandlePaymentSelectors();
  const { isOnline } = useIsOnline();
  const { handleCardInputChange } = useHandleCardInputChange();
  const { grandTotal } = useGetCartItemsSelectors();

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : handlePaymentError ? null : grandTotal ? (
        <>
          <CardInputErrors />
          <ParentDiv>
            <Text>
              you will be charged{" "}
              <RedSpan>£{(grandTotal / 100).toFixed(2)}</RedSpan>
            </Text>

            <Text>
              <Balancer>
                if this is correct, please enter your card details and then
                press the 'place order' button when it appears.
              </Balancer>
            </Text>
            <CardInputDiv>
              <CardElement {...{ options }} onChange={handleCardInputChange} />
            </CardInputDiv>
            <PlaceOrderButton />
            <StripeLogo />
          </ParentDiv>
        </>
      ) : null}
    </>
  );
};

export default CardInput;
