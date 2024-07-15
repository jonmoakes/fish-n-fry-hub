// import { useLocation } from "react-router-dom";

const useIsRouteWithNavWarning = () => {
  // const location = useLocation();
  // const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return false;
    // return path === bookSessionRoute ||
    //   path === bookRecurringSessionsRoute ||
    //   path === addFundsRoute ||
    //   path === addChildInfoRoute ||
    //   path === cancelBookingRoute
    //   ? true
    //   : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
