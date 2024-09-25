import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ParentDiv } from "../../../styles/div/div.styles";

const SignInProcess = () => (
  <ParentDiv>
    <H2 className="underline">sign in Process</H2>
    <Text>
      <Balancer>
        {" "}
        the user can quickly sign up with a good old fashioned email and
        password, or with social sign in via google or facebook.
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        other methods ( coming soon ) include a 'magic url' sign in where the
        user types in their email address and then they receive a link which
        creates a guest session.
      </Balancer>
    </Text>
    <Text>
      in this case, the user never has to remember a password, increasing
      convenience.
    </Text>
    <Text>once signed in, the user is redirected to the menu page.</Text>
  </ParentDiv>
);

export default SignInProcess;
