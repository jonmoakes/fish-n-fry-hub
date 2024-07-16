import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { signedOutRoutes } from "./routes";

const NavNoUser = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const location = useLocation();

  return (
    <>
      {!currentUser ? (
        <>
          {signedOutRoutes.map((route) => {
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
    </>
  );
};

export default NavNoUser;
