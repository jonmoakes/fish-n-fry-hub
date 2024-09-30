import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";
import useDbManageAddOrderResultSwalUseEffect from "./hooks/use-db-manage-add-order-result-swal-use-effect";

import Loader from "../../components/loader/loader.component";
import AddOrderIntroAndRequiredData from "./add-order-intro-and-required-data.component";
import AddOrderAfterErrorInstructions from "./add-order-after-error-instructions.component";
import AddOrderAfterErrorForm from "./add-order-after-error-form.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const DBManageAddOrderAfterError = () => {
  useDbManageAddOrderResultSwalUseEffect();
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();

  return (
    <Container>
      <ParentDiv>
        <Title>
          <Balancer>add an order to the database</Balancer>
        </Title>
      </ParentDiv>

      {databaseManagementIsLoading ? (
        <Loader />
      ) : (
        <>
          <AddOrderIntroAndRequiredData />
          <AddOrderAfterErrorInstructions />
          <AddOrderAfterErrorForm />
        </>
      )}
    </Container>
  );
};

export default DBManageAddOrderAfterError;
