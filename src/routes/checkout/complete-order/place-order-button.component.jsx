import useShouldShowPaymentButtonButton from "./complete-payment-hooks/use-should-show-payment-button.component";
import useGetClientSecretThunk from "./complete-payment-hooks/use-get-client-secret-thunk";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";

const PlaceOrderButton = () => {
  const { getClientSecretThunk } = useGetClientSecretThunk();
  const { shouldShowPaymentButton } = useShouldShowPaymentButtonButton();

  return (
    <>
      {shouldShowPaymentButton() ? (
        <YellowGreenButton onClick={getClientSecretThunk}>
          place order
        </YellowGreenButton>
      ) : null}
    </>
  );
};

export default PlaceOrderButton;
