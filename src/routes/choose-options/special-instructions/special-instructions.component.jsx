import { ParentDiv } from "../../../styles/div/div.styles";
import { StyledTextArea } from "../../../styles/form/form.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

const SpecialInstructions = () => {
  const { handleOptionChange } = useChooseOptionsFunctions();

  return (
    <ParentDiv>
      <H2>special instructions</H2>

      <StyledTextArea
        onChange={handleOptionChange}
        type="text"
        name="specialInstuctions"
        placeholder="Tell Us Any Requirements Here"
      />
    </ParentDiv>
  );
};

export default SpecialInstructions;
