import { ParentDiv } from "../../../styles/div/div.styles";
import { WhiteH2, H2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

const TotalPrice = () => {
  const { calculatePrice } = useChooseOptionsFunctions();

  return (
    <ParentDiv>
      <WhiteH2>total price:</WhiteH2>
      <BlackHr />
      <H2 className="no-underline">£{(calculatePrice() / 100).toFixed(2)}</H2>
    </ParentDiv>
  );
};

export default TotalPrice;
