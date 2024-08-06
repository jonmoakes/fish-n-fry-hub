import { useLocation } from "react-router-dom";

import useGetHamburgerMenuSelectors from "../../hooks/selectors/use-get-hamburger-menu-selectors";

import NavLogo from "./nav-logo.component";
import NavHamburger from "./nav-hamburger.component";
import NavigationLinks from "./navigation-links.component";
import NavSignOut from "./nav-sign-out.component";

import { Nav, Menu } from "../../styles/div/div.styles";

const Navigation = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();

  const location = useLocation();
  const path = location.pathname;

  const isRouteWithHeader = () => {
    return true;
    // return path !== editChildInfoRoute &&
    //   path !== deleteChildInfoRoute &&
    //   path !== chosenEntryChildDetailsRoute &&
    //   path !== cancelBookingRoute
    //   ? true
    //   : false;
  };

  return (
    <>
      {isRouteWithHeader() ? (
        <Nav>
          <NavLogo />
          <>
            <NavHamburger />
            <Menu {...{ showHamburgerMenu }}>
              <NavigationLinks {...{ path }} />
              <NavSignOut />
            </Menu>
          </>
        </Nav>
      ) : null}
    </>
  );
};

export default Navigation;
