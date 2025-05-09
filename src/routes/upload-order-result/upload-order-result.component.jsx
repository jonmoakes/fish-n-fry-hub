import Balancer from "react-wrap-balancer";

import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";
import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";
import useAddOrderToDatabaseResultSwalUseEffect from "./upload-order-result-hooks/use-add-order-to-database-result-swal-use-effect";
import useUploadOrderThunkUseEffect from "./upload-order-result-hooks/use-add-order-to-database-thunk-use-effect";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import useGetOrderToRepeatSelectors from "../../hooks/selectors/use-get-order-to-repeat-selectors";

const UploadOrderResult = () => {
  const { databaseManagementIsLoading } = useGetDatabaseManagementSelectors();
  const { orderToRepeatIsLoading } = useGetOrderToRepeatSelectors();
  const { sendEmailIsLoading } = useGetSendEmailSelectors();

  useUploadOrderThunkUseEffect();
  useAddOrderToDatabaseResultSwalUseEffect();

  return (
    <Container>
      {databaseManagementIsLoading ||
      orderToRepeatIsLoading ||
      sendEmailIsLoading ? (
        <SkeletonBox loadingText="Uploading Order To Database..." />
      ) : null}
      <ParentDiv>
        <Title>
          <Balancer>uploading order to database...</Balancer>
        </Title>
      </ParentDiv>
    </Container>
  );
};

export default UploadOrderResult;
