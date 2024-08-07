import { CheckoutOptionsInfoDiv } from "../../../../../../styles/div/div.styles";

import { WhiteSpan } from "../../../../../../styles/span/span.styles";

const AddOnsSalad = ({ saladChoice }) => (
  <>
    {saladChoice ? (
      <>
        <CheckoutOptionsInfoDiv>
          <WhiteSpan className="checkout">
            {saladChoice === "yes" ? "With Salad." : "No Salad."}
          </WhiteSpan>
        </CheckoutOptionsInfoDiv>
      </>
    ) : null}
  </>
);

export default AddOnsSalad;
