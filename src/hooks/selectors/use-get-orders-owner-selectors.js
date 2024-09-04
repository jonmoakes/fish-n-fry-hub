import { useSelector } from "react-redux";
import { selectOrdersOwnerSelectors } from "../../store/orders-owner/orders-owner-slice";

const useGetOrdersOwnerSelectors = () => {
  const {
    ordersOwnerIsLoading,
    ordersOwner,
    ordersOwnerError,
    formattedOrdersOwner,
    updateOrderStatusResult,
    updateOrderStatusError,
  } = useSelector(selectOrdersOwnerSelectors);

  return {
    ordersOwnerIsLoading,
    ordersOwner,
    ordersOwnerError,
    formattedOrdersOwner,
    updateOrderStatusResult,
    updateOrderStatusError,
  };
};

export default useGetOrdersOwnerSelectors;
