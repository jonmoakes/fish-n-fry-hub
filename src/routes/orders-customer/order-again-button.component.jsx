import useRepeatOrder from "./orders-customer-hooks/use-repeat-order";
import { MinimalButton } from "../../styles/buttons/buttons.styles";

const OrderAgainButton = ({ value }) => {
  const { addPreviousOrderToCartAndGoToRepeatOrderPage } = useRepeatOrder();
  return (
    <>
      <MinimalButton
        className="order-again"
        onClick={() => addPreviousOrderToCartAndGoToRepeatOrderPage(value)}
      >
        order again?
      </MinimalButton>
    </>
  );
};

export default OrderAgainButton;
