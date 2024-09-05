import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { updateOrderStatusAsync } from "../../../../../store/orders-owner/orders-owner.thunks";

import useConfirmSwal from "../../../../../hooks/use-confirm-swal";

import { confirmUpdateOrderStatusMessage } from "../../../../../strings/confirms/confirms-strings";
import { ordersOwnerAllTimeOrdersRoute } from "../../../../../strings/routes/routes-strings";

const useConfirmUpdateOrderStatus = (row) => {
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const orderStatus = row.original.orderStatus;
  const documentId = row.original.orderId;
  // Use createdAt and convert it to a Date object for comparison.
  const date = new Date(row.original.createdAt);

  const showUpdateOrderStatusButton = () => {
    if (isNaN(date.getTime())) {
      console.error("Invalid date provided");
      return false;
    } else if (path === ordersOwnerAllTimeOrdersRoute) {
      return false;
    }

    const currentDate = new Date();

    const isSameDay =
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear();

    if (!isSameDay) {
      return false;
    }

    const currentHour = currentDate.getHours();

    // Check if the current time is within the opening hours
    const withinEarlyOpeningTime = currentHour >= 11 && currentHour <= 13;
    const withinLateOpeningTime = currentHour >= 16 && currentHour <= 21;

    return withinEarlyOpeningTime || withinLateOpeningTime;
  };

  const confirmResult = () => {
    const attributeToUpdate = "orderStatus";
    const newOrderStatus = orderStatus === false ? true : false;

    dispatch(
      updateOrderStatusAsync({ attributeToUpdate, newOrderStatus, documentId })
    );
  };

  const confirmUpdateOrderStatus = () => {
    confirmSwal(
      confirmUpdateOrderStatusMessage(orderStatus),
      "",
      "yes, update status!",
      "",
      confirmResult,
      null
    );
  };

  return {
    showUpdateOrderStatusButton,
    confirmUpdateOrderStatus,
    orderStatus,
  };
};

export default useConfirmUpdateOrderStatus;
