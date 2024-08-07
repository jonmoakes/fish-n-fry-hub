import { CheckoutOptionsInfoDiv } from "../../../../../../styles/div/div.styles";
import { WhiteSpan } from "../../../../../../styles/span/span.styles";

const AddOnsDonerMeat = ({ donerMeatChoice }) => (
  <>
    {donerMeatChoice ? (
      <>
        <CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">Doner Meat.</WhiteSpan>
        </CheckoutOptionsInfoDiv>
      </>
    ) : null}
  </>
);

export default AddOnsDonerMeat;
