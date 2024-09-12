import { useSelector } from "react-redux";
import { selectOrderToRepeatSelectors } from "../../store/order-to-repeat/order-to-repeat.slice";

const useGetOrderToRepeatSelectors = () => {
  const {
    orderToRepeatIsLoading,
    idOfOrderToRepeat,
    orderToRepeatDetails,
    orderToRepeatError,
  } = useSelector(selectOrderToRepeatSelectors);

  const { customerId, grandTotal } = orderToRepeatDetails ?? {};

  return {
    orderToRepeatIsLoading,
    idOfOrderToRepeat,
    orderToRepeatDetails,
    orderToRepeatError,
    grandTotal,
    customerId,
  };
};

export default useGetOrderToRepeatSelectors;
