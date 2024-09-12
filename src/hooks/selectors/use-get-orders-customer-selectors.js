import { useSelector } from "react-redux";
import { selectOrdersCustomerSelectors } from "../../store/orders-customer/orders-customer-slice";

const useGetOrdersCustomerSelectors = () => {
  const {
    ordersCustomerIsLoading,
    ordersCustomer,
    ordersCustomerError,
    formattedOrdersCustomer,
  } = useSelector(selectOrdersCustomerSelectors);

  return {
    ordersCustomerIsLoading,
    ordersCustomer,
    ordersCustomerError,
    formattedOrdersCustomer,
  };
};

export default useGetOrdersCustomerSelectors;
