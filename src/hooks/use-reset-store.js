import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { resetSignInFormState } from "../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../store/sign-up-form/sign-up-form.slice";
import { resetChooseOptionsState } from "../store/choose-options/choose-options.slice";
import { resetUploadMenuItemsState } from "../store/upload-menu-items/upload-menu-items.slice";
import { resetCardInputResultState } from "../store/card-input-result/card-input-result.slice";
import { resetAllHandlePaymentState } from "../store/handle-payment/handle-payment.slice";
import { resetOrdersOwnerState } from "../store/orders-owner/orders-owner-slice";
import { resetCartState } from "../store/cart/cart.slice";
import { resetDatabaseManagementState } from "../store/database-management/database-management.slice";
import { resetSendEmailState } from "../store/send-email/send-email.slice";

import {
  signInRoute,
  signUpRoute,
  chooseOptionsRoute,
  uploadMenuItemsRoute,
  paymentResultRoute,
  ordersOwnerRoute,
  uploadOrderDeleteCartItemsRoute,
  ordersOwnerAllTimeOrdersRoute,
} from "../strings/routes/routes-strings";

const useResetStore = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
      case signInRoute:
        dispatch(resetSignInFormState());
        break;
      case signUpRoute:
        dispatch(resetSignUpFormState());
        break;
      case chooseOptionsRoute:
        dispatch(resetChooseOptionsState());
        break;
      case uploadMenuItemsRoute:
        dispatch(resetUploadMenuItemsState());
        break;
      case paymentResultRoute:
        dispatch(resetCardInputResultState());
        dispatch(resetAllHandlePaymentState());
        break;
      case uploadOrderDeleteCartItemsRoute:
        dispatch(resetCartState());
        dispatch(resetDatabaseManagementState());
        dispatch(resetSendEmailState());
        break;
      case ordersOwnerRoute:
      case ordersOwnerAllTimeOrdersRoute:
        dispatch(resetOrdersOwnerState());
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
