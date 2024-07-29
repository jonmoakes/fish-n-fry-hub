import {
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  aboutRoute,
  allUsersRoute,
  customerOrdersRoute,
  ownerOrdersRoute,
  menuRoute,
  uploadMenuItemsRoute,
} from "../../strings/routes/routes-strings";

export const signedInRoutes = [
  menuRoute,
  customerOrdersRoute,
  accountRoute,
  contactRoute,
];

export const ownerSignedInRoutes = [
  ownerOrdersRoute,
  allUsersRoute,
  menuRoute,
  accountRoute,
  contactRoute,
  uploadMenuItemsRoute,
];

export const signedOutRoutes = [
  menuRoute,
  signInRoute,
  signUpRoute,
  aboutRoute,
  contactRoute,
];
