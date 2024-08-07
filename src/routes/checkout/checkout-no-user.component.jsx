import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

const CheckoutNoUser = ({ currentUser }) => (
  <>
    {!currentUser ? (
      <ParentDiv>
        <Text>you need to be signed in in order to see the checkout page.</Text>
      </ParentDiv>
    ) : null}
  </>
);

export default CheckoutNoUser;
