import { useLocation } from "react-router-dom";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { signedOutRoutes } from "./routes";
import { useSelector } from "react-redux";

const NavNoUser = () => {
  const { currentUser } = useSelector(selectCurrentUserSelectors);
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
