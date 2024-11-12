import useGetSendEmailSelectors from "../../hooks/selectors/use-get-send-email-selectors";
import useConfirmCloseAccount from "./close-account-hooks/use-confirm-close-account";
import useCloseAccountSwal from "./close-account-hooks/use-close-account-swal";

import SkeletonBox from "../../components/skeleton-box/skeleton-box.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

import { contactRoute } from "../../strings/routes/routes-strings";

const CloseAccount = () => {
  useCloseAccountSwal();

  const { sendEmailIsLoading } = useGetSendEmailSelectors();
  const { confirmCloseAccount } = useConfirmCloseAccount();

  return (
    <Container>
      {sendEmailIsLoading ? <SkeletonBox loadingText="Please Wait..." /> : null}

      <ParentDiv>
        <Title>close your account</Title>
      </ParentDiv>

      <ParentDiv>
        <Text>
          if you wish to close your account, please send us a request using the
          "close account" button below.
        </Text>
        <Text>
          once we have received your request, please allow up to 7 days for all
          of your data to be deleted.
        </Text>

        <Text>you will receive an email once the process is complete.</Text>
      </ParentDiv>

      <ParentDiv>
        <Text>any questions?</Text>
        <Text>
          please{" "}
          <StyledLink className="yellow" to={contactRoute}>
            contact us
          </StyledLink>
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Text>happy to proceed with your account deletion?</Text>
        <Text>tap the button below!</Text>
        <YellowGreenButton onClick={confirmCloseAccount}>
          close account
        </YellowGreenButton>
      </ParentDiv>
    </Container>
  );
};

export default CloseAccount;
