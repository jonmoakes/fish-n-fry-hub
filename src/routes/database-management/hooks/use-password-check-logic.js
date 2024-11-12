import { useState } from "react";
import { useDispatch } from "react-redux";

import useGetDatabaseManagementSelectors from "../../../hooks/selectors/use-get-database-management-selectors";
import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { confirmPasswordForDbManagementAccessAsync } from "../../../store/database-management/database-management.thunks";
import useFireSwal from "../../../hooks/use-fire-swal";

const usePasswordCheckLogic = () => {
  const { passwordForDbAccessResult, databaseManagementIsLoading } =
    useGetDatabaseManagementSelectors();
  const { email } = useGetCurrentUserSelectors();

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { fireSwal } = useFireSwal();

  const userHasSuccessfullyEnteredPassword = localStorage.getItem(
    "userHasSuccessfullyEnteredPasswordToAccessDbManagement"
  );

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordCheck = () => {
    if (!password) {
      fireSwal("error", "please enter a password", "", 0, "", false, "", true);
    } else {
      dispatch(confirmPasswordForDbManagementAccessAsync({ email, password }));
    }
  };

  return {
    databaseManagementIsLoading,
    passwordForDbAccessResult,
    userHasSuccessfullyEnteredPassword,
    handlePasswordChange,
    handlePasswordCheck,
    password,
  };
};

export default usePasswordCheckLogic;
