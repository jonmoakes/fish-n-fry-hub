import { useLocation } from "react-router-dom";

import {
  checkoutRoute,
  chooseOptionsRoute,
  databaseManagementCreateNewProductRoute,
  databaseManagementEditOptionsPricesRoute,
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
      path === databaseManagementManageMenuRoute ||
      path === databaseManagementCreateNewProductRoute ||
      path === databaseManagementEditOptionsPricesRoute
      ? true
      : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
