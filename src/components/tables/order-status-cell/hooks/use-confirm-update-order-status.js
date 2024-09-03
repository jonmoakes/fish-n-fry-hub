import { useDispatch } from "react-redux";

import { updateOrderStatusAsync } from "../../../../store/orders-owner/orders-owner.thunks";

import useConfirmSwal from "../../../../hooks/use-confirm-swal";

import { confirmUpdateOrderStatusMessage } from "../../../../strings/confirms/confirms-strings";

const useConfirmUpdateOrderStatus = (row) => {
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();

  const orderStatus = row.original.orderStatus;
  const documentId = row.original.orderId;
  const date = row.original.createdAtAsDateObjectForSorting;

  const showUpdateOrderStatusButton = () => {
    if (!date) {
      console.error("no date provided");
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
