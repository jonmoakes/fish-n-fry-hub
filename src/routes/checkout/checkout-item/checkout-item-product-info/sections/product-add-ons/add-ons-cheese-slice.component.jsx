import { CheckoutOptionsInfoDiv } from "../../../../../../styles/div/div.styles";
import { WhiteSpan } from "../../../../../../styles/span/span.styles";

const AddOnsCheeseSlice = ({ cheeseSliceChoice }) => (
  <>
    {cheeseSliceChoice ? (
      <>
        <CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">Cheese slice.</WhiteSpan>
        </CheckoutOptionsInfoDiv>
      </>
    ) : null}
  </>
);

export default AddOnsCheeseSlice;
