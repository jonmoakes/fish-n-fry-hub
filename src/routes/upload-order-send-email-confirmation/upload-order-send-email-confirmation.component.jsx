import Balancer from "react-wrap-balancer";

import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";
import useSendEmailConfirmationFunctions from "./send-email-confirmation-hooks/use-send-email-confirmation-functions";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ColumnDiv, ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

// if we arrive here, the order must have been successfully uploaded to the database.
const UploadOrderSendEmailConfirmation = () => {
  const { sendEmailIsLoading } = useGetSendEmailSelectors();

  const { sendEmail, dontSendEmail } = useSendEmailConfirmationFunctions();

  return (
    <Container>
      {sendEmailIsLoading ? <Loader /> : null}
      <ParentDiv>
        <Title>
          <Balancer>
            {sendEmailIsLoading
              ? "sending email..."
              : "order successfully placed!"}
          </Balancer>
        </Title>
      </ParentDiv>

      <ParentDiv>
        <Text>would you like an email confirmation of your order?</Text>
        <ColumnDiv className="button">
          <YellowGreenButton onClick={sendEmail}>yes</YellowGreenButton>
          <BlackHr />
          <YellowGreenButton onClick={dontSendEmail}>no</YellowGreenButton>
        </ColumnDiv>
      </ParentDiv>
    </Container>
  );
};

export default UploadOrderSendEmailConfirmation;
