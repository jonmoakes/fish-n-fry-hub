import useGetOrderAndGoToRepeatOrderPage from "./orders-customer-hooks/use-get-order-and-go-to-repeat-order-page";
import { MinimalButton } from "../../styles/buttons/buttons.styles";

const OrderAgainButton = ({ value }) => {
  const { getOrderAndGoToRepeatOrderPage } =
    useGetOrderAndGoToRepeatOrderPage();

  return (
    <>
      <MinimalButton
        className="order-again"
        onClick={() => getOrderAndGoToRepeatOrderPage(value)}
      >
        Order Again
      </MinimalButton>
    </>
  );
};

export default OrderAgainButton;
