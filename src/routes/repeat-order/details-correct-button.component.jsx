import CompleteOrder from "../../components/complete-order/complete-order.component";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import useCancelRepeatOrder from "./repeat-order-hooks/use-cancel-repeat-order";

const DetailsCorrectButton = ({ showPaymentForm, setShowPaymentForm }) => {
  const { cancelRepeatOrder } = useCancelRepeatOrder();

  return (
    <>
      {showPaymentForm ? <CompleteOrder /> : null}

      <ParentDiv>
        {!showPaymentForm ? (
          <YellowGreenButton onClick={() => setShowPaymentForm(true)}>
            yes, details correct
          </YellowGreenButton>
        ) : (
          <>
            <YellowGreenButton onClick={cancelRepeatOrder}>
              cancel
            </YellowGreenButton>
          </>
        )}
      </ParentDiv>
    </>
  );
};

export default DetailsCorrectButton;
