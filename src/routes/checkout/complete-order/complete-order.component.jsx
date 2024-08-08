import useConfirmPaymentAfterGettingClientSecretUseEffect from "./complete-payment-hooks/use-confirm-payment-after-getting-client-secret-use-effect";

import RedirectAndLoader from "./errors-and-redirect/redirect-and-loader.component";

import CardInput from "./card-input.component";
import ShowFetchErrors from "../../../components/errors/show-fetch-errors.component";

import { CompleteOrderDiv } from "../../../styles/div/div.styles";

const CompleteOrder = () => {
  //once confimed and succsessful, a paymentObject will be available and will redirect to payment result route.
  // Success or filure of payment is handled in payment result route.
  useConfirmPaymentAfterGettingClientSecretUseEffect();

  return (
    <CompleteOrderDiv>
      <RedirectAndLoader />
      <CardInput />
      <ShowFetchErrors />
    </CompleteOrderDiv>
  );
};

export default CompleteOrder;
