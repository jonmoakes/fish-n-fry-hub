import { useSelector } from "react-redux";
import { selectOrdersOwnerSelectors } from "../../store/orders-owner/orders-owner-slice";

const useGetOrdersOwnerSelectors = () => {
  const {
    ordersOwnerIsLoading,
    ordersOwner,
    ordersOwnerError,
    sortedOrdersOwner,
    updateOrderStatusResult,
    updateOrderStatusError,
  } = useSelector(selectOrdersOwnerSelectors);

  return {
    ordersOwnerIsLoading,
    ordersOwner,
    ordersOwnerError,
    sortedOrdersOwner,
    updateOrderStatusResult,
    updateOrderStatusError,
  };
};

export default useGetOrdersOwnerSelectors;
