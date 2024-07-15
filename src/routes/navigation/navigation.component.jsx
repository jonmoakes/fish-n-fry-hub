// import { useLocation } from "react-router-dom";

import { selectHamburgerMenuSelectors } from "../../store/hamburger-menu/hamburger-menu.slice";
import { selectCurrentUserSelectors } from "../../store/user/user.slice";

import Loader from "../../components/loader/loader.component";
import NavLogo from "./nav-logo.component";
import NavHamburger from "./nav-hamburger.component";
import NavNoUser from "./nav-no-user.component";
import NavAppOwner from "./nav-app-owner.component";
import NavNotAppOwner from "./nav-not-app-owner.component";
import NavSignOut from "./nav-sign-out.component";

import { Nav, Menu } from "../../styles/div/div.styles";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { showHamburgerMenu } = useSelector(selectHamburgerMenuSelectors);
  const { currentUserIsLoading } = useSelector(selectCurrentUserSelectors);

  // const location = useLocation();
  // const path = location.pathname;

  const isRouteWithHeader = () => {
    return false;
    // return path !== editChildInfoRoute &&
    //   path !== deleteChildInfoRoute &&
    //   path !== chosenEntryChildDetailsRoute &&
    //   path !== cancelBookingRoute
    //   ? true
    //   : false;
  };

  return (
    <>
      {currentUserIsLoading ? <Loader /> : null}

      {isRouteWithHeader() ? (
        <Nav>
          <NavLogo />
          <>
            <NavHamburger />

            <Menu {...{ showHamburgerMenu }}>
              <NavNoUser />
              <NavAppOwner />
              <NavNotAppOwner />
              <NavSignOut />
            </Menu>
          </>
        </Nav>
      ) : null}
    </>
  );
};

export default Navigation;
