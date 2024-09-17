import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useConfirmMoveToAllTimeOrdersRoute from "../../orders-owner/hooks/use-confirm-move-to-all-time-orders-route";

import {
  closeAccountRoute,
  updateEmailRoute,
  updatePasswordRoute,
  allUsersRoute,
  databaseManagementRoute,
  contactRoute,
  pwaInfoRoute,
  incomeRoute,
  ordersOwnerRoute,
  ordersCustomerRoute,
} from "../../../strings/routes/routes-strings";

const useNavigateToRoute = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmMoveToAllTimeOrdersRoute } =
    useConfirmMoveToAllTimeOrdersRoute();

  const appOwnerButtons = [
    {
      id: 1,
      text: "view Orders",
      onClick: () => hamburgerHandlerNavigate(ordersOwnerRoute),
    },
    {
      id: 2,
      text: "view all time orders",
      onClick: () => confirmMoveToAllTimeOrdersRoute(),
    },
    {
      id: 3,
      text: "view all Users",
      onClick: () => hamburgerHandlerNavigate(allUsersRoute),
    },
    {
      id: 4,
      text: "income",
      onClick: () => hamburgerHandlerNavigate(incomeRoute),
    },
    {
      id: 5,
      text: "update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 6,
      text: "database management",
      onClick: () => hamburgerHandlerNavigate(databaseManagementRoute),
    },
    {
      id: 7,
      text: "install app info",
      onClick: () => hamburgerHandlerNavigate(pwaInfoRoute),
    },
    {
      id: 8,
      text: "contact",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },
  ];

  const notAppOwnerButtons = [
    {
      id: 9,
      text: "your orders",
      onClick: () => hamburgerHandlerNavigate(ordersCustomerRoute),
    },
    {
      id: 10,
      text: " update email",
      onClick: () => hamburgerHandlerNavigate(updateEmailRoute),
    },
    {
      id: 11,
      text: " update password",
      onClick: () => hamburgerHandlerNavigate(updatePasswordRoute),
    },
    {
      id: 12,
      text: " close account",
      onClick: () => hamburgerHandlerNavigate(closeAccountRoute),
    },
    {
      id: 13,
      text: " contact us",
      onClick: () => hamburgerHandlerNavigate(contactRoute),
    },
    {
      id: 14,
      text: " install our app!",
      onClick: () => hamburgerHandlerNavigate(pwaInfoRoute),
    },
  ];

  return {
    appOwnerButtons,
    notAppOwnerButtons,
  };
};

export default useNavigateToRoute;
