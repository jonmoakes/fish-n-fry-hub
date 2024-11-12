import usePasswordCheckResultSwalUseEffect from "./hooks/use-password-check-result-swal-use-effect";
import useNavigateToDbManagementButtons from "./hooks/use-navigate-to-db-management-buttons";
import usePasswordCheckLogic from "./hooks/use-password-check-logic";

import DBManageTitleLoaderIntro from "./db-manage-title-loader-intro.component";
import ErrorButtonInfo from "./error-button-info.component";
import PasswordForm from "./password-form.component";
import DBManageButtons from "./db-manage-buttons.component";

import { Container } from "../../styles/container/container.styles";

const DatabaseManagement = () => {
  usePasswordCheckResultSwalUseEffect();
  const { dbManagementButtons, dbManagementForErrorReceivedButtons } =
    useNavigateToDbManagementButtons();
  const {
    databaseManagementIsLoading,
    passwordForDbAccessResult,
    userHasSuccessfullyEnteredPassword,
    handlePasswordChange,
    handlePasswordCheck,
    password,
  } = usePasswordCheckLogic();

  return (
    <Container>
      <DBManageTitleLoaderIntro {...{ databaseManagementIsLoading }} />
      <PasswordForm
        {...{
          userHasSuccessfullyEnteredPassword,
          passwordForDbAccessResult,
          handlePasswordChange,
          password,
          handlePasswordCheck,
        }}
      />
      {userHasSuccessfullyEnteredPassword === "true" ||
      passwordForDbAccessResult === "success" ? (
        <>
          <ErrorButtonInfo />
          <DBManageButtons
            {...{ dbManagementButtons, dbManagementForErrorReceivedButtons }}
          />
        </>
      ) : null}
    </Container>
  );
};

export default DatabaseManagement;
