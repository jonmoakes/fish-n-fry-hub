import { useLocation } from "react-router-dom";

import {
  checkoutRoute,
  chooseOptionsRoute,
  repeatOrderRoute,
} from "../strings/routes/routes-strings";

const useIsRouteWithNavWarning = () => {
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return path === chooseOptionsRoute ||
      path === checkoutRoute ||
      path === repeatOrderRoute
      ? true
      : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
