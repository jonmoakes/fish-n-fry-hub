import { ParentDiv } from "../../styles/div/div.styles";
import { TotalPriceH2, WhiteH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const GrandTotal = ({ currentUser, cartItems, grandTotal }) => (
  <>
    {currentUser && cartItems && cartItems.length ? (
      <ParentDiv className="grand-total">
        <WhiteH2>
          grand total
          <br />
        </WhiteH2>
        <BlackHr />

        <TotalPriceH2>£{(grandTotal / 100).toFixed(2)}</TotalPriceH2>
      </ParentDiv>
    ) : null}
  </>
);

export default GrandTotal;
