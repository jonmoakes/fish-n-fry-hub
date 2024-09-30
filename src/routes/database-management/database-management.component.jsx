import Balancer from "react-wrap-balancer";
import useNavigateToDbManagementButtons from "./hooks/use-navigate-to-db-management-buttons";

import RenderButtonsList from "../../components/render-buttons-list/render-buttons-list.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Title } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { WhiteH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const DatabaseManagement = () => {
  const { dbManagementButtons, dbManagementForErrorReceivedButtons } =
    useNavigateToDbManagementButtons();

  const setUserHasConfirmed = () => {
    localStorage.setItem("userHasConfirmed", "true");
    window.location.reload();
  };

  const userHasConfirmed = localStorage.getItem("userHasConfirmed");

  return (
    <Container>
      <ParentDiv>
        <Title>database management</Title>
      </ParentDiv>

      <ParentDiv>
        <Text>
          <Balancer>
            here, you can view and update data in your database.
          </Balancer>
        </Text>
        <Text>
          <Balancer>
            <YellowShadowSpan>
              please note that editing the database can break the app if not
              done correctly!
            </YellowShadowSpan>
          </Balancer>
        </Text>
        <Text>
          <Balancer>
            please also note that any button under the heading of '
            <YellowShadowSpan>
              For If You Received An Error Email
            </YellowShadowSpan>
            ', should only be pressed if you have received an email telling you
            that there was an error when a user tried to perform an action in
            the app.
          </Balancer>
        </Text>
        <Text>
          <Balancer>
            if this is the case, you will have the error id in the email you
            received.
          </Balancer>
        </Text>
        <Text>
          <Balancer>
            tap on the button with the corresponding error id and this will take
            you to the appropriate page where you can manually fix the error.
          </Balancer>
        </Text>
        <Text>
          <Balancer>
            please contact jonathan if you have any queries at all before
            proceeding.
          </Balancer>
        </Text>
      </ParentDiv>

      {userHasConfirmed !== "true" ? (
        <ParentDiv>
          <Text>
            <Balancer>
              please tap the button below to confirm that you understand that
              making changes to the database can break the app if not done
              correctly.
            </Balancer>
          </Text>
          <Text>
            <Balancer>
              this choice will last until you sign out on this device.
            </Balancer>
          </Text>
          <Text>
            <Balancer>
              if you are signed in on any other device, the choice you made on
              that device will remain irrespective of whether you press 'i
              understand' on the device that you are currently using.
            </Balancer>
          </Text>
          <Text>
            <Balancer>
              when you sign back in, you will have to confirm again.
            </Balancer>
          </Text>

          <YellowGreenButton onClick={setUserHasConfirmed}>
            i understand
          </YellowGreenButton>
        </ParentDiv>
      ) : null}

      {userHasConfirmed === "true" ? (
        <>
          <ParentDiv>
            <WhiteH2>
              <Balancer>standard database management options:</Balancer>
            </WhiteH2>
            <BlackHr />
            <RenderButtonsList {...{ buttons: dbManagementButtons }} />
          </ParentDiv>

          <ParentDiv>
            <WhiteH2>
              <Balancer>for if you received an email with an error id</Balancer>
            </WhiteH2>
            <BlackHr />
            <RenderButtonsList
              {...{ buttons: dbManagementForErrorReceivedButtons }}
            />
          </ParentDiv>
        </>
      ) : null}
    </Container>
  );
};

export default DatabaseManagement;
