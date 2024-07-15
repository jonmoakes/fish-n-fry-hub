import { useNavigate, useLocation } from "react-router-dom";

import useGetHamburgerMenuSelectors from "./get-selectors/use-get-hamburger-menu-selectors";
import useHamburgerMenuActions from "./get-actions-and-thunks/use-hamburger-menu-actions";
import useResetStore from "./use-reset-store";
import useIsRouteWithNavWarning from "./use-is-route-with-nav-warning";

const useHamburgerHandlerNavigate = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();
  const { dispatchHideHamburgerMenu } = useHamburgerMenuActions();
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { resetStore } = useResetStore();

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const hamburgerHandlerNavigate = (url) => {
    if (showHamburgerMenu && isRouteWithNavWarning()) {
      dispatchHideHamburgerMenu();
      navigate(url, {
        state: path,
      });
    } else if (showHamburgerMenu && !isRouteWithNavWarning()) {
      dispatchHideHamburgerMenu();
      navigate(url);
    } else if (!showHamburgerMenu) {
      navigate(url);
    }
    resetStore();
  };

  return { hamburgerHandlerNavigate };
};

export default useHamburgerHandlerNavigate;
