import { useDispatch } from "react-redux";

import useGetOrderToRepeatSelectors from "../../../hooks/selectors/use-get-order-to-repeat-selectors";
import useFireSwal from "../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { resetOrderToRepeatState } from "../../../store/order-to-repeat/order-to-repeat.slice";
import {
  ordersCustomerRoute,
  uploadOrderDeleteCartItemsRoute,
} from "../../../strings/routes/routes-strings";
import { emailSentAfterErrorUploadingOrderMessage } from "../../../strings/successes/sucesses-strings";

const useEmailSentToAppOwnerAfterUploadOrderErrorSwal = () => {
  const { orderToRepeatDetails } = useGetOrderToRepeatSelectors();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();

  const emailSentToAppOwnerAfterUploadOrderErrorSwal = () => {
    fireSwal(
      "success",
      emailSentAfterErrorUploadingOrderMessage,
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        if (orderToRepeatDetails) {
          dispatch(resetOrderToRepeatState());
          hamburgerHandlerNavigate(ordersCustomerRoute);
        } else {
          hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
        }
      }
    });
  };

  return { emailSentToAppOwnerAfterUploadOrderErrorSwal };
};

export default useEmailSentToAppOwnerAfterUploadOrderErrorSwal;
