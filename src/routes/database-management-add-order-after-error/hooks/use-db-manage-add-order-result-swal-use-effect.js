import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { sendEmailOrderConfirmationAsync } from "../../../store/send-email/send-email.thunks";

import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { ordersOwnerRoute } from "../../../strings/routes/routes-strings";

import { formatOrderString } from "../../../functions/format-order-string/fomat-order-string";
import { getParsedOrderItems } from "../../../functions/get-parsed-order-items";

const useDbManageAddOrderResultSwalUseEffect = () => {
  const {
    addOrderResult,
    addOrderError,
    customerName,
    customerEmail,
    orderDetails,
  } = useGetDatabaseManagementSelectors();

  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const dispatch = useDispatch();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const swalShown = useRef(false);

  useEffect(() => {
    if ((!addOrderResult && !addOrderError) || swalShown.current) return;

    if (addOrderResult === "fulfilled") {
      swalShown.current = true;

      // would do this when you have an order json string and want to convert it to a human readable string.
      // orderDetails is a json string containing an id, userId and cartItems so parse it and then map over it, getting the cartItems and formatting them into a human readable string.
      const orderItems = getParsedOrderItems(orderDetails);
      const humanReadableOrder = orderItems.map((ord) =>
        formatOrderString(ord.cartItem)
      );
      const emailOfOrder = humanReadableOrder.join("\n");

      const confirmResult = () => {
        dispatch(
          sendEmailOrderConfirmationAsync({
            email: customerEmail,
            name: customerName,
            emailOfOrder,
          })
        );
      };

      const cancelResult = () => {
        hamburgerHandlerNavigate(ordersOwnerRoute);
      };

      confirmSwal(
        "order uploaded! Would you like to send the customer an email confirmation?",
        "",
        "yes",
        "no",
        confirmResult,
        cancelResult
      );
    } else if (addOrderResult === "rejected") {
      fireSwal(
        "error",
        "there was an error uploading the order",
        `the error was ${addOrderError}`,
        0,
        "",
        false,
        "",
        false
      );
    }
  }, [
    addOrderError,
    addOrderResult,
    fireSwal,
    confirmSwal,
    customerEmail,
    customerName,
    orderDetails,
    dispatch,
    hamburgerHandlerNavigate,
  ]);
};

export default useDbManageAddOrderResultSwalUseEffect;
