import Balancer from "react-wrap-balancer";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import { OptionsForm, StyledCheckbox } from "../../../styles/form/form.styles";
import { WhiteSpan } from "../../../styles/span/span.styles";
import { H2 } from "../../../styles/h2/h2.styles";

const GratedCheese = () => {
  const { hasGratedCheeseOption, gratedCheesePrice } =
    useChooseOptionsVariables();
  const { handleSingleChoiceCheckboxChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasGratedCheeseOption ? (
        <ParentDiv>
          <H2>
            <Balancer>add grated cheese?</Balancer>
          </H2>
          {gratedCheesePrice ? (
            <WhiteSpan>+ £{(gratedCheesePrice / 100).toFixed(2)}</WhiteSpan>
          ) : null}
          <OptionsForm onChange={handleSingleChoiceCheckboxChange}>
            <RadioDiv>
              <StyledCheckbox type="checkbox" name="gratedCheeseChoice" />
            </RadioDiv>
          </OptionsForm>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default GratedCheese;
