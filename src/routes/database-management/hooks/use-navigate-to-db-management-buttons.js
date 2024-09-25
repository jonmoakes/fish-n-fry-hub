import { useDispatch } from "react-redux";

import useHamburgerHandlerNavigate from "../../../hooks/use-hamburger-handler-navigate";
import { setErrorIdFromEmail } from "../../../store/database-management/database-management.slice";

import {
  databaseManagementAddOrderRoute,
  databaseManagementDeleteUserRoute,
} from "../../../strings/routes/routes-strings";

const useNavigateToDbManagementButtons = () => {
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const dispatch = useDispatch();

  const handleNavWithErrorId = (errorId, route) => {
    dispatch(setErrorIdFromEmail());
    hamburgerHandlerNavigate(route);
  };

  const dbManagementButtons = [
    {
      id: 1,
      heading: "delete a user",
      text: "delete user",
      onClick: () =>
        handleNavWithErrorId("", databaseManagementDeleteUserRoute),
    },
  ];

  const dbManagementForErrorReceivedButtons = [
    {
      id: 2,
      heading: "create an order after you received an error email",
      text: "create order",
      onClick: () => handleNavWithErrorId("1", databaseManagementAddOrderRoute),
    },
  ];

  return {
    dbManagementButtons,
    dbManagementForErrorReceivedButtons,
  };
};

export default useNavigateToDbManagementButtons;
