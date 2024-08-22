import {
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  aboutRoute,
  allUsersRoute,
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
  allUsersRoute,
  menuRoute,
  accountRoute,
  "db-management",
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
