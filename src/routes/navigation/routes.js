import {
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  aboutRoute,
  customerOrdersRoute,
  ordersOwnerRoute,
  menuRoute,
  checkoutRoute,
} from "../../strings/routes/routes-strings";

export const signedInRoutes = [
  menuRoute,
  customerOrdersRoute,
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
