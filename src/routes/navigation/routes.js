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
  accountRoute,
  contactRoute,
];

export const signedOutRoutes = [
  signInRoute,
  signUpRoute,
  aboutRoute,
  contactRoute,
];
