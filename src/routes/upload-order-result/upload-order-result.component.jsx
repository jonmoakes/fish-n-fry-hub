import Balancer from "react-wrap-balancer";

import useAddOrderToDatabaseErrorSwalUseEffect from "./upload-order-result-hooks/use-add-order-to-database-error-swal-use-effect";
import useUploadOrderThunkUseEffect from "./upload-order-result-hooks/use-add-order-to-database-thunk-use-effect";

import UploadOrderRedirectAndLoader from "./upload-order-redirect-and-loader.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";

const UploadOrderResult = () => {
  useUploadOrderThunkUseEffect();
  useAddOrderToDatabaseErrorSwalUseEffect();

  return (
    <Container>
      <UploadOrderRedirectAndLoader />
      <ParentDiv>
        <Title>
          <Balancer>uploading order to database...</Balancer>
        </Title>
      </ParentDiv>
    </Container>
  );
};

export default UploadOrderResult;
