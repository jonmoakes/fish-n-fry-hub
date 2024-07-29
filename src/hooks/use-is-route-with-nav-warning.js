import { useLocation } from "react-router-dom";

import { chooseOptionsRoute } from "../strings/routes/routes-strings";

const useIsRouteWithNavWarning = () => {
  const location = useLocation();
  const path = location.pathname;

  const isRouteWithNavWarning = () => {
    return path === chooseOptionsRoute ? true : false;
  };

  return { isRouteWithNavWarning };
};

export default useIsRouteWithNavWarning;
