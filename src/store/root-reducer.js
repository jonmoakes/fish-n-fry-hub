import { combineReducers } from "@reduxjs/toolkit";

import { hamburgerMenuReducer } from "./hamburger-menu/hamburger-menu.slice";
import { signUpFormReducer } from "./sign-up-form/sign-up-form.slice";
import { signInFormReducer } from "./sign-in-form/sign-in-form.slice";
import { menuReducer } from "./menu/menu.slice";
import { chooseOptionsReducer } from "./choose-options/choose-options.slice";
// import { contactFormReducer } from "./contact-form/contact-form.slice";
import { userReducer } from "./user/user.slice";
import { passwordIsVisibleReducer } from "./password-is-visible/password-is-visible.slice";
// import { updateEmailReducer } from "./update-email/update-email.slice";
import { uploadMenuItemsReducer } from "./upload-menu-items/upload-menu-items.slice";
import { cartReducer } from "./cart/cart.slice";

export const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  signUpForm: signUpFormReducer,
  signInForm: signInFormReducer,
  menu: menuReducer,
  chooseOptions: chooseOptionsReducer,
  // contactForm: contactFormReducer,
  user: userReducer,
  passwordIsVisible: passwordIsVisibleReducer,
  // updateEmail: updateEmailReducer,
  uploadMenuItems: uploadMenuItemsReducer,
  cart: cartReducer,
});
