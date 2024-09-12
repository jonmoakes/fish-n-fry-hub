import { useState } from "react";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";

import { allUsersRoute } from "../../../strings/routes/routes-strings";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

const useIncomeFunctions = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmSwal } = useConfirmSwal();
  const [weekNumber, setWeekNumber] = useState("");

  const calculateTotalAmount = (filteredRows) => {
    let totalAmount = 0;
    filteredRows.forEach((row) => {
      totalAmount += row.values.amount || 0;
    });
    return totalAmount;
  };

  const filteredRows = (rows) => {
    return rows.filter((row) => !row.filtered);
  };

  const handleWeekFilterChange = (payload) => {
    setWeekNumber(payload);
  };

  const weekNumberEnteredAndTotalIsZero = (weekNumber, rows) => {
    return weekNumber && calculateTotalAmount(rows) === 0 && true;
  };

  const searchHasValueAndHasReturnedRows = (value, rows) => {
    return value && value.length && rows.length && true;
  };

  const navigateToUsersPage = () => {
    confirmSwal(
      "go to users page?",
      "",
      "yes",
      "",
      () => hamburgerHandlerNavigate(allUsersRoute),
      null
    );
  };

  return {
    calculateTotalAmount,
    filteredRows,
    weekNumber,
    handleWeekFilterChange,
    weekNumberEnteredAndTotalIsZero,
    searchHasValueAndHasReturnedRows,
    navigateToUsersPage,
  };
};

export default useIncomeFunctions;
