import useGetCurrentUserSelectors from "../../../hooks/selectors/use-get-current-user-selectors";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";

import useCombinedRequiredCheck from "./add-to-cart-hooks/use-combined-required-check";
import NeedToSignIn from "./need-to-sign-in.component";

const AddToCart = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { requiredChecksPassed } = useCombinedRequiredCheck();
  console.log(requiredChecksPassed);
  return (
    <>
      <ParentDiv>
        {currentUser && requiredChecksPassed ? (
          <YellowGreenButton onClick={() => console.log("add item now")}>
            add to cart
          </YellowGreenButton>
        ) : !currentUser ? (
          <NeedToSignIn />
        ) : currentUser && !requiredChecksPassed ? (
          <>
            <Text>the form has errors</Text>
          </>
        ) : null}
      </ParentDiv>
    </>
  );
};

export default AddToCart;
