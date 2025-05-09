import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { signUpFormReducer } from "./sign-up-form/sign-up-form.slice";
import { signInFormReducer } from "./sign-in-form/sign-in-form.slice";
import { menuReducer } from "./menu/menu.slice";
import { chooseOptionsReducer } from "./choose-options/choose-options.slice";
import { userReducer } from "./user/user.slice";
import { passwordIsVisibleReducer } from "./password-is-visible/password-is-visible.slice";
import { uploadMenuItemsReducer } from "./upload-menu-items/upload-menu-items.slice";
import { cartReducer } from "./cart/cart.slice";
import { handlePaymentReducer } from "./handle-payment/handle-payment.slice";
import { cardInputResultReducer } from "./card-input-result/card-input-result.slice";
import { databaseManagementReducer } from "./database-management/database-management.slice";
import { ordersOwnerReducer } from "./orders-owner/orders-owner-slice";
import { ordersCustomerReducer } from "./orders-customer/orders-customer-slice";
import { sendEmailReducer } from "./send-email/send-email.slice";
import { shouldShowElementReducer } from "./should-show-element/should-show-element.slice";
import { getAllUsersReducer } from "./get-all-users/get-all-users.slice";
import { incomeDataReducer } from "./income-data/income-data.slice";
import { orderToRepeatReducer } from "./order-to-repeat/order-to-repeat.slice";
import { contactFormReducer } from "./contact-form/contact-form.slice";
import { generateNewPasswordRequestReducer } from "./generate-new-password-request/generate-new-password-request.slice";
import { chooseNewPasswordReducer } from "./choose-new-password/choose-new-password.slice";
import { updateEmailReducer } from "./update-email/update-email.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  signUpForm: signUpFormReducer,
  signInForm: signInFormReducer,
  menu: menuReducer,
  chooseOptions: chooseOptionsReducer,
  user: userReducer,
  passwordIsVisible: passwordIsVisibleReducer,
  uploadMenuItems: uploadMenuItemsReducer,
  cart: cartReducer,
  handlePayment: handlePaymentReducer,
  cardInputResult: cardInputResultReducer,
  databaseManagement: databaseManagementReducer,
  ordersOwner: ordersOwnerReducer,
  ordersCustomer: ordersCustomerReducer,
  sendEmail: sendEmailReducer,
  shouldShowElement: shouldShowElementReducer,
  getAllUsers: getAllUsersReducer,
  incomeData: incomeDataReducer,
  orderToRepeat: orderToRepeatReducer,
  contactForm: contactFormReducer,
  generateNewPasswordRequest: generateNewPasswordRequestReducer,
  chooseNewPassword: chooseNewPasswordReducer,
  updateEmail: updateEmailReducer,
});
