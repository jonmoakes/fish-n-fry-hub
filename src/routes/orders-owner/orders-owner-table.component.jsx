import { useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
} from "react-table";

import useOrdersOwnerLogic from "./orders-owner-hooks/use-orders-owner-logic";
import useOrdersOwnerListener from "./orders-owner-hooks/use-orders-owner-listener";
import useIsOnline from "../../hooks/use-is-online";

import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import NoBookingDataFound from "./no-booking-data.found.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import SearchBoxWhenNoChosenEntry from "../../components/tables/search-box-when-no-chosen-entry.component";
import OrdersOwnerRenderTable from "./orders-owner-render-table.component";
import ErrorUpdatingOrderStatus from "./error-updating-order-status.component";

const OrdersOwnerTable = () => {
  useOrdersOwnerListener();
  const {
    data,
    columns,
    initialState,
    ordersOwnerError,
    updateOrderStatusError,
  } = useOrdersOwnerLogic();
  const { isOnline } = useIsOnline();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    useColumnOrder,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [...columns];
      });
    }
  );
  const { globalFilter, pageIndex, pageSize } = state;
  const [value, setValue] = useState(globalFilter);

  return (
    <>
      {!isOnline ? (
        <NetworkError />
      ) : ordersOwnerError ? (
        <ShowFetchErrors />
      ) : updateOrderStatusError ? (
        <ErrorUpdatingOrderStatus />
      ) : (
        <>
          <NoBookingDataFound {...{ data }} />

          <SearchBoxWhenNoChosenEntry
            {...{
              rows,
              data,
              globalFilter,
              setGlobalFilter,
              value,
              setValue,
            }}
          />

          {data.length ? (
            <>
              <OrdersOwnerRenderTable
                {...{
                  initialState,
                  headerGroups,
                  getTableProps,
                  getTableBodyProps,
                  page,
                  prepareRow,
                }}
              />

              <TablePagination
                {...{
                  data,
                  rows,
                  pageIndex,
                  pageOptions,
                  gotoPage,
                  canPreviousPage,
                  previousPage,
                  nextPage,
                  canNextPage,
                  pageCount,
                  pageSize,
                  setPageSize,
                }}
              />
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default OrdersOwnerTable;
