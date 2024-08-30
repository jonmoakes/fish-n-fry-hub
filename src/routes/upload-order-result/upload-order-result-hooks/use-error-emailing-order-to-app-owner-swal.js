import { useDispatch } from "react-redux";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { contactRoute } from "../../../strings/routes/routes-strings";
import { resetSendEmailState } from "../../../store/send-email/send-email.slice";
import { resetDatabaseManagementState } from "../../../store/database-management/database-management.slice";

const useErrorEmailingOrderToAppOwnerSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const errorEmailingOrderToAppOwnerSwal = () => {
    fireSwal(
      "error",
      "well this is embarassing..The email failed to send. Please contact us immediately so that we can process your order. We have saved your cart items for the moment should you need their details. Please DO NOT try to place the order again from the checkout as you would be charged twice. We sincerely apologise for the inconvenience.",
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
        hamburgerHandlerNavigate(contactRoute);
      }
    });
  };

  return { errorEmailingOrderToAppOwnerSwal };
};

export default useErrorEmailingOrderToAppOwnerSwal;
