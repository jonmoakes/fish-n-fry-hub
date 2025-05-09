import { BlackHr } from "../../../styles/hr/hr.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";

import { ParentDiv } from "../../../styles/div/div.styles";
import {
  signInRoute,
  signUpRoute,
} from "../../../strings/routes/routes-strings";

const NeedToSignIn = () => (
  <ParentDiv>
    <Text>
      please{" "}
      <StyledLink className="yellow" to={signInRoute}>
        sign in
      </StyledLink>{" "}
      in order to add items to your cart.
    </Text>
    <BlackHr />
    <Text>
      don't have an account?{" "}
      <StyledLink className="yellow" to={signUpRoute}>
        sign up
      </StyledLink>
      !
    </Text>
  </ParentDiv>
);

export default NeedToSignIn;
