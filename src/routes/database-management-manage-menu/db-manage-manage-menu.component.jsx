import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";
import useGetMenuSelectors from "../../hooks/selectors/use-get-menu-selectors";

import ManageMenuIntro from "./manage-menu-intro.component";
import useFetchMenu from "./hooks/use-fetch-menu";
import ShowFetchErrors from "../../components/errors/show-fetch-errors.component";
import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const DBManageManageMenu = () => {
  useFetchMenu();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { menuError, menuIsLoading } = useGetMenuSelectors();

  return (
    <Container>
      <ParentDiv>
        <Title>manage menu</Title>
      </ParentDiv>

      {databaseManagementIsLoading || menuIsLoading ? (
        <SkeletonBox loadingText="Updating Item..." />
      ) : menuError ? (
        <ShowFetchErrors />
      ) : (
        <>
          <ManageMenuIntro />
        </>
      )}
    </Container>
  );
};

export default DBManageManageMenu;
