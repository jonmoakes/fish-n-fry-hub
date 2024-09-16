import { useSelector } from "react-redux";
import { selectOrderToRepeatSelectors } from "../../store/order-to-repeat/order-to-repeat.slice";

const useGetOrderToRepeatSelectors = () => {
  const {
    orderToRepeatIsLoading,
    idOfOrderToRepeat,
    orderToRepeatDetails,
    orderToRepeatResult,
    orderToRepeatError,
  } = useSelector(selectOrderToRepeatSelectors);

  const {
    customerId,
    repeatOrderForDisplayingToUser,
    repeatOrderGrandTotal,
    repeatOrderForDb,
    repeatOrderAsEmail,
  } = orderToRepeatDetails ?? {};

  return {
    orderToRepeatIsLoading,
    idOfOrderToRepeat,
    orderToRepeatResult,
    orderToRepeatError,
    orderToRepeatDetails,
    customerId,
    repeatOrderForDisplayingToUser,
    repeatOrderGrandTotal,
    repeatOrderForDb,
    repeatOrderAsEmail,
  };
};

export default useGetOrderToRepeatSelectors;
