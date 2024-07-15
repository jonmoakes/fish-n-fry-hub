import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";
import { appOwnerId } from "../../constants/constants";

import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useConfirmSwal from "../../hooks/use-confirm-swal";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { signedInRoutes } from "./routes";

import {
  confirmSureMessage,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";
import { loseAllDataMessage } from "../../strings/info/info-strings";

const NavNotAppOwner = () => {
  const { currentUser } = useSelector(selectCurrentUserSelectors);
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { confirmForwardToNewRoute } = useConfirmSwal();

  const location = useLocation();

  return (
    <>
      {currentUser &&
      currentUser.id !== appOwnerId &&
      !isRouteWithNavWarning() ? (
        <>
          {signedInRoutes.map((route) => {
            return route !== location.pathname ? (
              <NavLink
                key={route}
                onClick={() => hamburgerHandlerNavigate(route)}
              >
                <BorderLink>
                  {route.replaceAll("-", " ").replace("/", " ")}
                </BorderLink>
              </NavLink>
            ) : null;
          })}
        </>
      ) : null}

      {currentUser &&
      currentUser.id !== appOwnerId &&
      isRouteWithNavWarning() ? (
        <>
          {signedInRoutes.map((route) => {
            return route !== location.pathname ? (
              <NavLink
                key={route}
                onClick={() =>
                  confirmForwardToNewRoute(
                    confirmSureMessage,
                    loseAllDataMessage,
                    imSureMessage,
                    route
                  )
                }
              >
                <BorderLink>
                  {route.replaceAll("-", " ").replace("/", " ")}
                </BorderLink>
              </NavLink>
            ) : null;
          })}
        </>
      ) : null}
    </>
  );
};

export default NavNotAppOwner;
