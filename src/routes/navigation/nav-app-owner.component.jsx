import { useLocation } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import { appOwnerId } from "../../constants/constants";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import { ownerSignedInRoutes } from "./routes";

const NavAppOwner = () => {
  const { currentUser, id } = useGetCurrentUserSelectors();

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
