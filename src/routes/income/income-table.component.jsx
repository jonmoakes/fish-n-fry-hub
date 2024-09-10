import { useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useColumnOrder,
  useFilters,
} from "react-table";

import useIsOnline from "../../hooks/use-is-online";
import useIncomeVariables from "./income-hooks/use-income-variables";
import useIncomeFunctions from "./income-hooks/use-income-functions";
import useFilterByWeekUseEffect from "./income-hooks/use-filter-by-week-use-effect";

import NoIncomeDataFound from "./no-income-data-found.component";
import TableSearchBox from "../../components/tables/table-search-box.component";
import WeekFilterInput from "./week-filter-input.component";
import RenderTable from "../../components/tables/render-table.component";
import NetworkError from "../../components/errors/network-error.component";
import TablePagination from "../../components/tables/table-pagination.component";
import ShowTotalOfReturnedEntries from "./show-total-of-returned-entries.component";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";

const IncomeTable = () => {
  const { isOnline } = useIsOnline();
  const { data, columns, initialState, incomeDataError } = useIncomeVariables();
  const { handleWeekFilterChange, weekNumber } = useIncomeFunctions();
  useFilterByWeekUseEffect();
  const { filteredData } = useFilterByWeekUseEffect(weekNumber);

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
      data: filteredData,
      initialState,
    },
    useFilters,
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
      ) : incomeDataError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <NoIncomeDataFound {...{ data }} />
          <WeekFilterInput {...{ weekNumber, handleWeekFilterChange }} />

          <TableSearchBox
            {...{
              rows,
              data,
              globalFilter,
              setGlobalFilter,
              value,
              setValue,
            }}
          />

          <ShowTotalOfReturnedEntries
            {...{
              value,
              rows,
              initialState,
              weekNumber,
              handleWeekFilterChange,
            }}
          />

          {data.length ? (
            <>
              <RenderTable
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

export default IncomeTable;
