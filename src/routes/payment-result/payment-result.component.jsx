import useGetPaymentResultStatus from "./payment-result-hooks/use-get-payment-result-status";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { Container } from "../../styles/container/container.styles";
import { Title } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const PaymentResult = () => {
  const { handlePaymentIsLoading } = useGetHandlePaymentSelectors();
  useGetPaymentResultStatus();

  return (
    <Container>
      {handlePaymentIsLoading ? (
        <SkeletonBox loadingText="Getting Payment Result..." />
      ) : null}

      <ParentDiv>
        <Title>payment result</Title>
      </ParentDiv>
    </Container>
  );
};

export default PaymentResult;
