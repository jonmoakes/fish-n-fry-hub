import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";
import useDeleteUserResultSwal from "./hooks/use-delete-user-result-swal";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import DeleteUserInstructions from "./delete-user-instructions.component";
import IntroAndRequiredData from "./intro-and-required-data.component";
import DeleteUserForm from "./delete-user-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const DBManageDeleteUser = () => {
  useDeleteUserResultSwal();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <Title>delete user</Title>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <SkeletonBox loadingText="Deleting User..." />
      ) : (
        <>
          <IntroAndRequiredData />
          <DeleteUserInstructions />
          <DeleteUserForm />
        </>
      )}
    </Container>
  );
};

export default DBManageDeleteUser;
