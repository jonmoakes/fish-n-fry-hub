import useGetPaymentResultStatus from "./payment-result-hooks/use-get-payment-result-status";
import useGetHandlePaymentSelectors from "../../hooks/selectors/use-get-handle-payment-selectors";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { Title } from "../../styles/h1/h1.styles";
import { ParentDiv } from "../../styles/div/div.styles";

const PaymentResult = () => {
  useGetPaymentResultStatus();
  const { handlePaymentIsLoading } = useGetHandlePaymentSelectors();

  return (
    <Container>
      {handlePaymentIsLoading ? <Loader /> : null}

      <ParentDiv>
        <Title>payment result</Title>
      </ParentDiv>
    </Container>
  );
};

export default PaymentResult;
