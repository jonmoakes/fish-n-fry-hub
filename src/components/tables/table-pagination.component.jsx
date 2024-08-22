import { useLocation } from "react-router-dom";

import { PaginationDiv, PaginationTextDiv } from "../../styles/div/div.styles";
import { PaginationPageButton } from "../../styles/buttons/buttons.styles";
import { PaginationText } from "../../styles/p/p.styles";
import {
  PaginationInput,
  PaginationSelect,
} from "../../styles/form/form.styles";

import { defaultTableSize } from "../../constants/constants";
import { ordersOwnerRoute } from "../../strings/routes/routes-strings";

const TablePagination = ({
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
  data,
  rows,
}) => {
  const location = useLocation();
  const path = location.pathname;

  const setTablePageSizeBasedOnRoute = (selectedPageSize) => {
    switch (path) {
      case ordersOwnerRoute:
        localStorage.setItem(
          "ordersOwnerChosenTablePageSize",
          selectedPageSize
        );
        break;
      default:
        return;
    }
  };

  const pageSizeOptions = [
    { value: 5, id: crypto.randomUUID() },
    { value: defaultTableSize, id: crypto.randomUUID() },
    { value: 20, id: crypto.randomUUID() },
    { value: 50, id: crypto.randomUUID() },
    { value: 75, id: crypto.randomUUID() },
    { value: 100, id: crypto.randomUUID() },
    { value: 150, id: crypto.randomUUID() },
    { value: 200, id: crypto.randomUUID() },
  ];

  return (
    <>
      {data.length > defaultTableSize && rows.length ? (
        <PaginationDiv>
          <div>
            <PaginationText>
              showing Page {pageIndex + 1} Of {pageOptions.length}
            </PaginationText>

            <PaginationPageButton
              onClick={() => {
                gotoPage(0);
              }}
              disabled={!canPreviousPage}
            >
              &#10094;&#10094;
            </PaginationPageButton>

            <PaginationPageButton
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              &#10094;
            </PaginationPageButton>
            <PaginationPageButton
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              &#10095;
            </PaginationPageButton>

            <PaginationPageButton
              onClick={() => {
                gotoPage(pageCount - 1);
              }}
              disabled={!canNextPage}
            >
              &#10095;&#10095;
            </PaginationPageButton>

            <PaginationTextDiv>
              <PaginationText>Or Go To Page: </PaginationText>
              <PaginationInput
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </PaginationTextDiv>

            <PaginationTextDiv>
              <PaginationText>choose row amount: </PaginationText>
              <PaginationSelect
                value={pageSize}
                onChange={(e) => {
                  const selectedPageSize = e.target.value;
                  setTablePageSizeBasedOnRoute(selectedPageSize);
                  setPageSize(Number(selectedPageSize));
                }}
              >
                {pageSizeOptions.map(({ value, id }) => (
                  <option key={id} value={value}>
                    Show {value} Rows
                  </option>
                ))}
              </PaginationSelect>
            </PaginationTextDiv>
          </div>
        </PaginationDiv>
      ) : null}
    </>
  );
};

export default TablePagination;
