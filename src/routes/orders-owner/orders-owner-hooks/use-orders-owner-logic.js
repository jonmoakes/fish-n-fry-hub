import { useMemo } from "react";

import useGetOrdersOwnerSelectors from "../../../hooks/selectors/use-get-orders-owner-selectors";

import { ORDERS_OWNER_TABLE_COLUMNS } from "../orders-table-columns";

import { defaultTableSize } from "../../../constants/constants";

const useOrdersOwnerLogic = () => {
  const {
    ordersOwner,
    ordersOwnerIsLoading,
    ordersOwnerError,
    sortedOrdersOwner,
  } = useGetOrdersOwnerSelectors();

  const ordersOwnerPageSizeFromLocalStorage = localStorage.getItem(
    "ordersOwnerChosenTablePageSize"
  );

  const data = useMemo(
    () => (sortedOrdersOwner !== undefined ? sortedOrdersOwner : []),
    [sortedOrdersOwner]
  );
  const columns = useMemo(() => ORDERS_OWNER_TABLE_COLUMNS, []);
  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "createdAtAsDateObjectForSorting", desc: true }],
      pageSize: ordersOwnerPageSizeFromLocalStorage
        ? Number(ordersOwnerPageSizeFromLocalStorage)
        : defaultTableSize,
    }),
    [ordersOwnerPageSizeFromLocalStorage]
  );

  // no orders at all in database
  const noOrdersMadeYet = () => {
    return !ordersOwnerIsLoading && !ordersOwner.length ? true : false;
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
    ordersOwnerError,
  };
};

export default useOrdersOwnerLogic;
