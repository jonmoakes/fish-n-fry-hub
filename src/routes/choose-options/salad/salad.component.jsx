import Balancer from "react-wrap-balancer";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import { H2 } from "../../../styles/h2/h2.styles";
import { ParentDiv, InnerFormDiv } from "../../../styles/div/div.styles";
import { OptionsForm, StyledCheckbox } from "../../../styles/form/form.styles";

const Salad = () => {
  const { hasSaladOption } = useChooseOptionsVariables();
  const { handleSingleChoiceCheckboxChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasSaladOption ? (
        <ParentDiv>
          <H2>
            <Balancer>add salad?</Balancer>
          </H2>
          <OptionsForm onChange={handleSingleChoiceCheckboxChange}>
            <InnerFormDiv>
              <StyledCheckbox type="checkbox" name="saladChoice" />
            </InnerFormDiv>
          </OptionsForm>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default Salad;
