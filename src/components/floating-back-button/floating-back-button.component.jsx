import { useNavigate, useLocation } from "react-router-dom";

import useBackButton from "./use-back-button";
import useIsRouteWithNavWarning from "../../hooks/use-is-route-with-nav-warning";
import useIsMobileDevice from "../../hooks/use-is-mobile-device";

import { BackArrow } from "../../styles/svg/svg.styles";
import { RelativePositionDiv } from "../../styles/div/div.styles";
import { BackButton } from "../../styles/buttons/buttons.styles";
import { databaseManagementManageMenuRoute } from "../../strings/routes/routes-strings";

const FloatingBackButton = () => {
  const { confirmGoBack } = useBackButton();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { isMobileDevice, isDesktop } = useIsMobileDevice();

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const noConfirmNeeded = () => {
    return path !== "/" && !isRouteWithNavWarning() ? true : false;
  };

  const confirmNeeded = () => {
    return location.pathname !== "/" && isRouteWithNavWarning() ? true : false;
  };

  const dontShowButton = () => {
    return path === "/" || path === databaseManagementManageMenuRoute
      ? true
      : false;
  };

  return (
    <>
      {isDesktop() || dontShowButton() ? null : isMobileDevice() &&
        noConfirmNeeded() ? (
        <RelativePositionDiv>
          <BackButton onClick={() => navigate(-1)}>
            <BackArrow />
          </BackButton>
        </RelativePositionDiv>
      ) : isMobileDevice() && confirmNeeded() ? (
        <RelativePositionDiv>
          <BackButton onClick={confirmGoBack}>
            <BackArrow />
          </BackButton>
        </RelativePositionDiv>
      ) : null}
    </>
  );
};

export default FloatingBackButton;
