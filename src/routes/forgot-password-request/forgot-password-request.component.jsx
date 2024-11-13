import useResetPasswordRequestResultSwal from "../../hooks/use-reset-password-request-result-swal";
import useGetGenerateNewPasswordRequestSelectors from "../../hooks/selectors/use-get-generate-new-password-request-selectors";
import useCheckForValidEmailAndSendRequest from "./forgot-password-request-hooks/use-check-for-valid-email-and-send-request";
import useForgotPasswordRequestFunctions from "./forgot-password-request-hooks/use-forgot-password-request-functions";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";
import ForgotPasswordRequestAccordion from "./forgot-password-request-accordion.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, LowercasedInput, Label } from "../../styles/form/form.styles";
import { Title } from "../../styles/h1/h1.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { enterEmailAddress } from "../../strings/placeholders/placeholders-strings";

const ForgotPasswordRequest = () => {
  useResetPasswordRequestResultSwal();
  const {
    generateNewPasswordRequestEmail,
    generateNewPasswordRequestIsLoading,
  } = useGetGenerateNewPasswordRequestSelectors();
  const { checkForValidEmailAndSendRequest } =
    useCheckForValidEmailAndSendRequest();
  const { handleEmailChange } = useForgotPasswordRequestFunctions();

  return (
    <Container>
      {generateNewPasswordRequestIsLoading ? (
        <SkeletonBox loadingText="Please Wait" />
      ) : null}

      <ParentDiv>
        <Title>forgot password</Title>
      </ParentDiv>
      <ParentDiv>
        <ForgotPasswordRequestAccordion />
      </ParentDiv>

      <ParentDiv>
        <Form>
          <Label>email:</Label>
          <LowercasedInput
            type="email"
            required
            onChange={handleEmailChange}
            value={generateNewPasswordRequestEmail || ""}
            placeholder={enterEmailAddress}
          />

          {generateNewPasswordRequestEmail ? (
            <YellowGreenButton
              type="button"
              onClick={checkForValidEmailAndSendRequest}
            >
              reset password
            </YellowGreenButton>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default ForgotPasswordRequest;
