import { useMemo } from "react";

import useGetOrdersCustomerSelectors from "../../../hooks/selectors/use-get-orders-customer-selectors";

import ORDERS_CUSTOMER_TABLE_COLUMNS from "../orders-customer-table-columns";

import { defaultTableSize } from "../../../constants/constants";

const useOrdersCustomerLogic = () => {
  const {
    ordersCustomer,
    ordersCustomerIsLoading,
    ordersCustomerError,
    formattedOrdersCustomer,
  } = useGetOrdersCustomerSelectors();

  const ordersCustomerPageSizeFromLocalStorage = localStorage.getItem(
    "ordersCustomerChosenTablePageSize"
  );

  const data = useMemo(
    () =>
      formattedOrdersCustomer !== undefined ? formattedOrdersCustomer : [],
    [formattedOrdersCustomer]
  );
  const columns = useMemo(() => ORDERS_CUSTOMER_TABLE_COLUMNS, []);
  const initialState = useMemo(
    () => ({
      sortBy: [],
      pageSize: ordersCustomerPageSizeFromLocalStorage
        ? Number(ordersCustomerPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [ordersCustomerPageSizeFromLocalStorage]
  );

  // no orders at all in database
  const noOrdersMadeYet = () => {
    return !ordersCustomerIsLoading && !ordersCustomer.length ? true : false;
  };

  const noDataFound = (data) => {
    return !data.length ? true : false;
  };

  return {
    data,
    columns,
    initialState,
    noOrdersMadeYet,
    noDataFound,
    ordersCustomerError,
  };
};

export default useOrdersCustomerLogic;
