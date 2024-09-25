import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";

import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";

import Logo from "../../assets/logo-no-text.webp";

import { LogoContainer } from "../../styles/div/div.styles";
import { LogoImage } from "../../styles/image/image.styles";

import {
  confirmSureMessage,
  imSureMessage,
} from "../../strings/confirms/confirms-strings";
import { loseAllDataMessage } from "../../strings/info/info-strings";

const NavLogo = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { confirmForwardToNewRoute } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const handleClick = () => {
    const route = "/";

    if (currentUser && isRouteWithNavWarning()) {
      confirmForwardToNewRoute(
        confirmSureMessage,
        loseAllDataMessage,
        imSureMessage,
        "stay here",
        route
      );
    } else {
      hamburgerHandlerNavigate(route);
    }
  };

  return (
    <LogoContainer>
      <LogoImage onClick={handleClick} src={Logo} alt="logo" />
    </LogoContainer>
  );
};

export default NavLogo;
