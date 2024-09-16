import {
  checkoutRoute,
  repeatOrderRoute,
} from "../strings/routes/routes-strings";

export const getOrderTotalBasedOnRoute = (
  path,
  grandTotal,
  repeatOrderGrandTotal
) => {
  const orderTotal =
    path === checkoutRoute
      ? grandTotal
      : path === repeatOrderRoute && repeatOrderGrandTotal;

  return orderTotal;
};
