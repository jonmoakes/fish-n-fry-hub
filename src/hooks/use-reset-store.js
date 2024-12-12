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
import { resetGetAllUsersState } from "../store/get-all-users/get-all-users.slice";
import { resetIncomeDataState } from "../store/income-data/income-data.slice";
import { resetOrdersCustomerState } from "../store/orders-customer/orders-customer-slice";
import { resetContactFormState } from "../store/contact-form/contact-form.slice";

import {
  signInRoute,
  signInEmailOtpRoute,
  signUpRoute,
  chooseOptionsRoute,
  uploadMenuItemsRoute,
  paymentResultRoute,
  ordersOwnerRoute,
  ordersCustomerRoute,
  uploadOrderDeleteCartItemsRoute,
  ordersOwnerAllTimeOrdersRoute,
  allUsersRoute,
  incomeRoute,
  contactRoute,
  databaseManagementDeleteUserRoute,
  databaseManagementAddOrderAfterErrorRoute,
  menuRoute,
  databaseManagementManageMenuRoute,
  databaseManagementCreateNewProductRoute,
  databaseManagementEditOptionsPricesRoute,
} from "../strings/routes/routes-strings";
import { resetMenuState } from "../store/menu/menu.slice";

const useResetStore = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname;

  const resetStore = () => {
    switch (path) {
      case signInRoute:
      case signInEmailOtpRoute:
        dispatch(resetSignInFormState());
        break;
      case signUpRoute:
        dispatch(resetSignUpFormState());
        break;
      case menuRoute:
        dispatch(resetMenuState());
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
      case ordersCustomerRoute:
        dispatch(resetOrdersCustomerState());
        break;
      case allUsersRoute:
        dispatch(resetGetAllUsersState());
        break;
      case incomeRoute:
        dispatch(resetIncomeDataState());
        break;
      case contactRoute:
        dispatch(resetContactFormState());
        break;
      case databaseManagementDeleteUserRoute:
      case databaseManagementManageMenuRoute:
      case databaseManagementCreateNewProductRoute:
      case databaseManagementEditOptionsPricesRoute:
        dispatch(resetDatabaseManagementState());
        break;
      case databaseManagementAddOrderAfterErrorRoute:
        dispatch(resetDatabaseManagementState());
        dispatch(resetSendEmailState());
        break;
      default:
        return;
    }
  };

  return { resetStore };
};

export default useResetStore;
