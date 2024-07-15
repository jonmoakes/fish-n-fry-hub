import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectCurrentUserSelectors } from "../../store/user/user.slice";

const PrivateRoutes = () => {
  const { currentUser } = useSelector(selectCurrentUserSelectors);
  return <>{currentUser ? <Outlet /> : null}</>;
};

export default PrivateRoutes;
