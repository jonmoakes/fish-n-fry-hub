import { ParentDiv } from "../../styles/div/div.styles";
import { TotalPriceH2, WhiteH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const GrandTotal = ({ grandTotal }) => (
  <ParentDiv className="grand-total">
    <WhiteH2>
      grand total
      <br />
    </WhiteH2>
    <BlackHr />

    <TotalPriceH2>£{(grandTotal / 100).toFixed(2)}</TotalPriceH2>
  </ParentDiv>
);

export default GrandTotal;
