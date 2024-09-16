import { useDispatch } from "react-redux";

import useGetOrderToRepeatSelectors from "../../../hooks/selectors/use-get-order-to-repeat-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import { resetOrderToRepeatState } from "../../../store/order-to-repeat/order-to-repeat.slice";
import { sendEmailOrderConfirmationAsync } from "../../../store/send-email/send-email.thunks";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useFireSwal from "../../../hooks/use-fire-swal";

import {
  ordersCustomerRoute,
  uploadOrderDeleteCartItemsRoute,
} from "../../../strings/routes/routes-strings";

const useSendEmailConfirmationFunctions = () => {
  const { email, name } = useGetCurrentUserSelectors();
  const { formattedStringOfOrderForEmail } =
    useGetDatabaseManagementSelectors();
  const { orderToRepeatDetails, repeatOrderAsEmail } =
    useGetOrderToRepeatSelectors();

  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const emailOfOrder = orderToRepeatDetails
    ? repeatOrderAsEmail
    : formattedStringOfOrderForEmail;

  const sendEmail = () => {
    dispatch(
      sendEmailOrderConfirmationAsync({
        email,
        name,
        emailOfOrder,
      })
    ).then((resultAction) => {
      if (sendEmailOrderConfirmationAsync.fulfilled.match(resultAction)) {
        fireSwal("success", "email sent!", "", 2000, "", false, "", true);
        if (orderToRepeatDetails) {
          dispatch(resetOrderToRepeatState());
          hamburgerHandlerNavigate(ordersCustomerRoute);
        } else {
          hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
        }
      }
    });
  };

  const dontSendEmail = () => {
    if (orderToRepeatDetails) {
      dispatch(resetOrderToRepeatState());
      hamburgerHandlerNavigate(ordersCustomerRoute);
    } else {
      hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
    }
  };

  return { sendEmail, dontSendEmail };
};

export default useSendEmailConfirmationFunctions;
