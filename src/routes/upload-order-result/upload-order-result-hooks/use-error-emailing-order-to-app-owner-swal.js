import { useDispatch } from "react-redux";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { contactRoute } from "../../../strings/routes/routes-strings";
import { resetSendEmailState } from "../../../store/send-email/send-email.slice";
import { resetDatabaseManagementState } from "../../../store/database-management/database-management.slice";
import useGetOrderToRepeatSelectors from "../../../hooks/selectors/use-get-order-to-repeat-selectors";
import { resetOrderToRepeatState } from "../../../store/order-to-repeat/order-to-repeat.slice";
import { errorEmailOrderToAppOwnerMessage } from "../../../strings/errors/errors-strings";

const useErrorEmailingOrderToAppOwnerSwal = () => {
  const { orderToRepeatDetails } = useGetOrderToRepeatSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const errorEmailingOrderToAppOwnerSwal = () => {
    const message = orderToRepeatDetails
      ? "please go to your orders table and then contact us immediately quoting the ORDER ID of the order you wish to repeat."
      : "Please contact us immediately so that we can process your order. We have saved your cart items for the moment should you need their details.";
    fireSwal(
      "error",
      errorEmailOrderToAppOwnerMessage(message),
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        dispatch(resetSendEmailState());
        dispatch(resetDatabaseManagementState());
        dispatch(resetOrderToRepeatState());
        hamburgerHandlerNavigate(contactRoute);
      }
    });
  };

  return { errorEmailingOrderToAppOwnerSwal };
};

export default useErrorEmailingOrderToAppOwnerSwal;
