import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const ErrorButtonInfo = () => (
  <ParentDiv>
    <Text>
      <Balancer>
        please also note that any button under the heading of '
        <RedSpan>For If You Received An Error Email</RedSpan>', should only be
        pressed if you have received an email telling you that there was an
        error when a user tried to perform an action in the app.
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
        tap on the button with the corresponding error id and this will take you
        to the appropriate page where you can manually fix the error.
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        please contact jonathan if you have any queries at all before
        proceeding.
      </Balancer>
    </Text>
  </ParentDiv>
);

export default ErrorButtonInfo;
