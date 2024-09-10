import { useState } from "react";

const useIncomeFunctions = () => {
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

  return {
    calculateTotalAmount,
    filteredRows,
    weekNumber,
    handleWeekFilterChange,
    weekNumberEnteredAndTotalIsZero,
    searchHasValueAndHasReturnedRows,
  };
};

export default useIncomeFunctions;
