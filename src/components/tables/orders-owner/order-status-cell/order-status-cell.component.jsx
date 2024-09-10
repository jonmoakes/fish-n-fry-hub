import useConfirmUpdateOrderStatus from "./hooks/use-confirm-update-order-status";

import { UpdateOrderStatusButton } from "../../../../styles/buttons/buttons.styles";

import { OrderStatusDiv } from "../../../../styles/div/div.styles";
import { SpanWithBackground } from "../../../../styles/span/span.styles";

const OrderStatusCell = ({ row }) => {
  const { showUpdateOrderStatusButton, confirmUpdateOrderStatus, orderStatus } =
    useConfirmUpdateOrderStatus(row);

  return (
    <>
      {showUpdateOrderStatusButton() ? (
        <OrderStatusDiv>
          {orderStatus === true ? (
            <>
              <SpanWithBackground className="completed">
                completed
              </SpanWithBackground>
              <UpdateOrderStatusButton onClick={confirmUpdateOrderStatus}>
                change to 'preparing'
              </UpdateOrderStatusButton>
            </>
          ) : (
            <>
              <SpanWithBackground>preparing</SpanWithBackground>
              <UpdateOrderStatusButton onClick={confirmUpdateOrderStatus}>
                change to 'completed'
              </UpdateOrderStatusButton>
            </>
          )}
        </OrderStatusDiv>
      ) : (
        "N/A"
      )}
    </>
  );
};

export default OrderStatusCell;
