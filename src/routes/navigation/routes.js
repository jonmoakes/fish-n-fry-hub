import {
  contactRoute,
  accountRoute,
  signInRoute,
  signUpRoute,
  aboutRoute,
  allUsersRoute,
  customerOrdersRoute,
  ownerOrdersRoute,
} from "../../strings/routes/routes-strings";

export const signedInRoutes = [customerOrdersRoute, accountRoute, contactRoute];

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
