import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import useIsRouteWithNavWarning from "../../../hooks/use-is-route-with-nav-warning";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { appOwnerId } from "../../../constants/constants";

import {
  signedOutRoutes,
  ownerSignedInRoutes,
  signedInRoutes,
} from "../routes";

import {
  confirmSureMessage,
  imSureMessage,
} from "../../../strings/confirms/confirms-strings";
import { loseAllDataMessage } from "../../../strings/info/info-strings";
import { checkoutRoute } from "../../../strings/routes/routes-strings";
import useGetCartItemsSelectors from "../../../hooks/selectors/use-get-cart-items-selectors";

const useNavLogic = () => {
  const { currentUser, id } = useGetCurrentUserSelectors();
  const { cartItems } = useGetCartItemsSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();

  //   const routesToRender = !currentUser
  //     ? signedOutRoutes
  //     : currentUser && id === appOwnerId
  //     ? ownerSignedInRoutes
  //     : signedInRoutes;

  const routesWithFilteredCheckoutRoute = (routes) => {
    return routes.filter((route) => {
      if (route === checkoutRoute && cartItems && !cartItems.length) {
        return false;
      }
      return true;
    });
  };

  const routesToRender = !currentUser
    ? signedOutRoutes
    : currentUser && id === appOwnerId
    ? ownerSignedInRoutes
    : signedInRoutes;

  const navigationLinks = routesWithFilteredCheckoutRoute(
    routesToRender,
    cartItems
  );

  const handleNavigate = (route) => {
    return !isRouteWithNavWarning()
      ? hamburgerHandlerNavigate(route)
      : confirmForwardToNewRoute(
          confirmSureMessage,
          loseAllDataMessage,
          imSureMessage,
          "",
          route
        );
  };

  const formattedLink = (route) => {
    return route.replaceAll("-", " ").replace("/", " ");
  };

  return { routesToRender, handleNavigate, navigationLinks, formattedLink };
};

export default useNavLogic;
