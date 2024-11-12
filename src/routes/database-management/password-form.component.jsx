import Balancer from "react-wrap-balancer";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { Text } from "../../styles/p/p.styles";

const PasswordForm = ({
  userHasSuccessfullyEnteredPassword,
  passwordForDbAccessResult,
  handlePasswordChange,
  password,
  handlePasswordCheck,
}) => (
  <>
    {userHasSuccessfullyEnteredPassword ===
    "true" ? null : passwordForDbAccessResult !== "success" ? (
      <ParentDiv>
        <Text>
          as operations within this page are sensitive changes, please enter
          your password in order to continue.
        </Text>
        <Text>
          <Balancer>
            note - once you have correctly submitted your password, you shan't
            be asked to do so again when returning to this page until the next
            time you sign in.
          </Balancer>
        </Text>
        <Form>
          <Label>enter your password:</Label>
          <StyledInput
            type="text"
            onChange={handlePasswordChange}
            value={password || ""}
          />

          <YellowGreenButton type="button" onClick={handlePasswordCheck}>
            confirm password
          </YellowGreenButton>
        </Form>
      </ParentDiv>
    ) : null}
  </>
);

export default PasswordForm;
