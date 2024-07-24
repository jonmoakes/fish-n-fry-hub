import Balancer from "react-wrap-balancer";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import { WhiteSpan } from "../../../styles/span/span.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import { OptionsForm, StyledCheckbox } from "../../../styles/form/form.styles";

const DonerMeat = () => {
  const { hasDonerMeatOption, donerMeatPrice } = useChooseOptionsVariables();
  const { handleSingleChoiceCheckboxChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasDonerMeatOption ? (
        <ParentDiv>
          <H2>
            <Balancer>add doner meat?</Balancer>
          </H2>
          {donerMeatPrice ? (
            <WhiteSpan>+ £{(donerMeatPrice / 100).toFixed(2)}</WhiteSpan>
          ) : null}
          <OptionsForm onChange={handleSingleChoiceCheckboxChange}>
            <RadioDiv>
              <StyledCheckbox type="checkbox" name="donerMeatChoice" />
            </RadioDiv>
          </OptionsForm>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default DonerMeat;
