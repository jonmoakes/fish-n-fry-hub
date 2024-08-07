import { CheckoutOptionsInfoDiv } from "../../../../../../styles/div/div.styles";
import { WhiteSpan } from "../../../../../../styles/span/span.styles";

const AddOnsGratedCheese = ({ gratedCheeseChoice }) => (
  <>
    {gratedCheeseChoice ? (
      <>
        <CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">
            {gratedCheeseChoice ? "Grated cheese." : null}
          </WhiteSpan>
        </CheckoutOptionsInfoDiv>
      </>
    ) : null}
  </>
);

export default AddOnsGratedCheese;
