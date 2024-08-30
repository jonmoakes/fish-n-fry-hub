import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";
import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";
import useAddOrderToDatabaseResultSwalUseEffect from "./upload-order-result-hooks/use-add-order-to-database-result-swal-use-effect";
import useUploadOrderThunkUseEffect from "./upload-order-result-hooks/use-add-order-to-database-thunk-use-effect";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const UploadOrderResult = () => {
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();

  useUploadOrderThunkUseEffect();
  useAddOrderToDatabaseResultSwalUseEffect();

  return (
    <Container>
      {databaseManagementIsLoading || sendEmailIsLoading ? <Loader /> : null}
      <ParentDiv>
        <Title>
          <Balancer>uploading order to database...</Balancer>
        </Title>
      </ParentDiv>
    </Container>
  );
};

export default UploadOrderResult;
