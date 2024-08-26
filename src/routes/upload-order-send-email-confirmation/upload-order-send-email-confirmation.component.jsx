import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";

import Loader from "../../components/loader/loader.component";

import { Container } from "../../styles/container/container.styles";
import { ColumnDiv, ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { useDispatch } from "react-redux";
import { sendEmailOrderConfirmationAsync } from "../../store/send-email/send-email.thunks";
import useGetCurrentUserSelectors from "../../hooks/selectors/use-get-current-user-selectors";
import useGetDatabaseManagementSelectors from "../../hooks/selectors/use-get-database-management-selectors";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useFireSwal from "../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import { uploadOrderDeleteCartItemsRoute } from "../../strings/routes/routes-strings";
import Balancer from "react-wrap-balancer";

// if we arrive here, the order must have been successfully uploaded to the database.
const UploadOrderSendEmailConfirmation = () => {
  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const { email, name } = useGetCurrentUserSelectors();
  const { formattedStringOfOrderForEmail } =
    useGetDatabaseManagementSelectors();

  const dispatch = useDispatch();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const confirmResult = () => {
    dispatch(
      sendEmailOrderConfirmationAsync({
        email,
        name,
        formattedStringOfOrderForEmail,
      })
    ).then((resultAction) => {
      if (sendEmailOrderConfirmationAsync.fulfilled.match(resultAction)) {
        fireSwal("success", "email sent!", "", 0, "", false, "", false).then(
          (isConfirmed) => {
            if (isConfirmed) {
              console.log("done");
              // hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
            }
          }
        );
      }
    });
  };

  const dontSendEmail = () => {
    hamburgerHandlerNavigate(uploadOrderDeleteCartItemsRoute);
  };

  const confirmSendEmail = () => {
    confirmSwal("send an email?", "", "yes", "", confirmResult);
  };

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
          <YellowGreenButton onClick={confirmSendEmail}>yes</YellowGreenButton>
          <BlackHr />
          <YellowGreenButton onClick={dontSendEmail}>no</YellowGreenButton>
        </ColumnDiv>
      </ParentDiv>
    </Container>
  );
};

export default UploadOrderSendEmailConfirmation;
