import { useMemo } from "react";
import { useDispatch } from "react-redux";
import useGetOrdersOwnerSelectors from "../../../hooks/selectors/use-get-orders-owner-selectors";
import {
  resetUpdateOrderStatusError,
  resetUpdateOrderStatusResult,
} from "../../../store/orders-owner/orders-owner-slice";

import { ORDERS_OWNER_TABLE_COLUMNS } from "../orders-table-columns";

import { defaultTableSize } from "../../../constants/constants";

const useOrdersOwnerLogic = () => {
  const {
    ordersOwner,
    ordersOwnerIsLoading,
    ordersOwnerError,
    formattedOrdersOwner,
    updateOrderStatusError,
  } = useGetOrdersOwnerSelectors();
  const dispatch = useDispatch();

  const ordersOwnerPageSizeFromLocalStorage = localStorage.getItem(
    "ordersOwnerChosenTablePageSize"
  );

  const data = useMemo(
    () => (formattedOrdersOwner !== undefined ? formattedOrdersOwner : []),
    [formattedOrdersOwner]
  );
  const columns = useMemo(() => ORDERS_OWNER_TABLE_COLUMNS, []);
  const initialState = useMemo(
    () => ({
      sortBy: [],
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

  const resetOrderStatusResultAndError = () => {
    dispatch(resetUpdateOrderStatusResult());
    dispatch(resetUpdateOrderStatusError());
  };

  return {
    data,
    columns,
    initialState,
    noOrdersMadeYet,
    noDataFound,
    ordersOwnerError,
    updateOrderStatusError,
    resetOrderStatusResultAndError,
  };
};

export default useOrdersOwnerLogic;
