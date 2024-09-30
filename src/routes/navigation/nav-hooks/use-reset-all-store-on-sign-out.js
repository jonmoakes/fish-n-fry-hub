import { useDispatch } from "react-redux";

import { resetCardInputResultState } from "../../../store/card-input-result/card-input-result.slice";
import { resetCartState } from "../../../store/cart/cart.slice";
import { resetChooseOptionsState } from "../../../store/choose-options/choose-options.slice";
import { resetDatabaseManagementState } from "../../../store/database-management/database-management.slice";
import { resetAllHandlePaymentState } from "../../../store/handle-payment/handle-payment.slice";
import { resetUploadMenuItemsState } from "../../../store/upload-menu-items/upload-menu-items.slice";
import { resetOrdersOwnerState } from "../../../store/orders-owner/orders-owner-slice";
import { resetSendEmailState } from "../../../store/send-email/send-email.slice";
import { resetSignInFormState } from "../../../store/sign-in-form/sign-in-form.slice";
import { resetSignUpFormState } from "../../../store/sign-up-form/sign-up-form.slice";
import { resetOrdersCustomerState } from "../../../store/orders-customer/orders-customer-slice";
import { resetOrderToRepeatState } from "../../../store/order-to-repeat/order-to-repeat.slice";
import { resetContactFormState } from "../../../store/contact-form/contact-form.slice";

const useResetAllStoreOnSignOut = () => {
  const dispatch = useDispatch();

  // not including resetMenu as none user needs the menu.
  const resetAllStoreOnSignOut = () => {
    dispatch(resetCardInputResultState());
    dispatch(resetCartState());
    dispatch(resetChooseOptionsState());
    dispatch(resetDatabaseManagementState());
    dispatch(resetAllHandlePaymentState());
    dispatch(resetUploadMenuItemsState());
    dispatch(resetOrdersOwnerState());
    dispatch(resetOrdersCustomerState());
    dispatch(resetSendEmailState());
    dispatch(resetSignInFormState());
    dispatch(resetSignUpFormState());
    dispatch(resetOrderToRepeatState());
    dispatch(resetContactFormState());
    dispatch(resetDatabaseManagementState());
    localStorage.clear();
  };

  return { resetAllStoreOnSignOut };
};

export default useResetAllStoreOnSignOut;
