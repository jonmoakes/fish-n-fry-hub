import useGetAllUsersSelectors from "../../hooks/selectors/use-get-all-users-selectors";
import useAllUsersListener from "./all-users-hooks/use-all-users-listener";
import useGetAllUsersThunkUseEffect from "./all-users-hooks/use-get-all-users-thunk-use-effect";

import Loader from "../../components/loader/loader.component";
import AllUsersTable from "./all-users-table.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const AllUsers = () => {
  const { getAllUsersIsLoading } = useGetAllUsersSelectors();
  useAllUsersListener();
  useGetAllUsersThunkUseEffect();

  return (
    <Container>
      {getAllUsersIsLoading ? <Loader /> : null}

      <ParentDiv>
        <Title>users list</Title>
      </ParentDiv>

      <AllUsersTable />
    </Container>
  );
};

export default AllUsers;
