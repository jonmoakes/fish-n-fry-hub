import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { ownerSignedInRoutes } from "./routes";
import { appOwnerId } from "../../constants/constants";

const NavAppOwner = () => {
  const { currentUser } = useSelector(selectCurrentUserSelectors);
  const id = currentUser.id;

  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const location = useLocation();

  return (
    <>
      {currentUser && id === appOwnerId ? (
        <>
          {ownerSignedInRoutes.map((route) => {
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

export default NavAppOwner;
