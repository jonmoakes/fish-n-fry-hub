import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

import {
  signInRoute,
  signUpRoute,
} from "../../../strings/routes/routes-strings";

const AddToCart = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  return (
    <>
      <ParentDiv>
        {currentUser ? (
          <YellowGreenButton onClick={() => console.log("add item now")}>
            add to cart
          </YellowGreenButton>
        ) : (
          <>
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
          </>
        )}
      </ParentDiv>
    </>
  );
};

export default AddToCart;
