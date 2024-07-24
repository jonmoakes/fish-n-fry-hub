import Balancer from "react-wrap-balancer";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import { WhiteSpan } from "../../../styles/span/span.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import { OptionsForm, StyledCheckbox } from "../../../styles/form/form.styles";

const CheeseSlice = () => {
  const { hasCheeseSliceOption } = useChooseOptionsVariables();
  const { handleSingleChoiceCheckboxChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasCheeseSliceOption ? (
        <ParentDiv>
          <H2>
            <Balancer>add a cheese slice?</Balancer>
          </H2>
          <WhiteSpan>free!</WhiteSpan>
          <OptionsForm onChange={handleSingleChoiceCheckboxChange}>
            <RadioDiv>
              <StyledCheckbox type="checkbox" name="cheeseSliceChoice" />
            </RadioDiv>
          </OptionsForm>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default CheeseSlice;
