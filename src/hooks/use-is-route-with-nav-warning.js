import { useLocation } from "react-router-dom";

import {
  checkoutRoute,
  chooseOptionsRoute,
  databaseManagementManageMenuRoute,
  repeatOrderRoute,
} from "../strings/routes/routes-strings";

const useIsRouteWithNavWarning = () => {
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return path === chooseOptionsRoute ||
      path === checkoutRoute ||
      path === repeatOrderRoute ||
      path === databaseManagementManageMenuRoute
      ? true
      : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
