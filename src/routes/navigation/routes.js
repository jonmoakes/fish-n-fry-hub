import {
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  aboutRoute,
  ordersCustomerRoute,
  ordersOwnerRoute,
  menuRoute,
  checkoutRoute,
} from "../../strings/routes/routes-strings";

export const signedInRoutes = [
  menuRoute,
  ordersCustomerRoute,
  checkoutRoute,
  accountRoute,
  contactRoute,
];

export const ownerSignedInRoutes = [
  ordersOwnerRoute,
  accountRoute,
  menuRoute,
  contactRoute,
  checkoutRoute,
];

export const signedOutRoutes = [
  menuRoute,
  signInRoute,
  signUpRoute,
  aboutRoute,
  contactRoute,
];
