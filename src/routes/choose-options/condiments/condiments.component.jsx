import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseCondimentsFunctions from "./condiments-hooks/use-choose-condiments-functions";

import CondimentsTitleAndRequiredInfo from "./condiments-title-and-required-info.component";

import { ParentDiv, InnerFormDiv } from "../../../styles/div/div.styles";
import {
  Form,
  Label,
  OptionsForm,
  StyledCheckbox,
} from "../../../styles/form/form.styles";
import { OptionsLabel } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

const Condiments = () => {
  const { numberOfCondimentsAvailable, condimentsDocuments } =
    useChooseOptionsVariables();
  const {
    showCondimentsCheckboxes,
    showCondimentsRadio,
    handleCondimentsChange,
  } = useChooseCondimentsFunctions();
  const { handleOptionChange } = useChooseOptionsFunctions();

  return (
    <>
      {showCondimentsCheckboxes ? (
        <ParentDiv>
          <CondimentsTitleAndRequiredInfo
            {...{ numberOfCondimentsAvailable }}
          />

          <OptionsForm onChange={handleCondimentsChange}>
            <>
              {condimentsDocuments.map((condiment) => {
                const { $id, name } = condiment;

                return (
                  <InnerFormDiv key={$id}>
                    <OptionsLabel>{name}</OptionsLabel>
                    <StyledCheckbox
                      className="multiple"
                      type="checkbox"
                      id={name}
                      name={name}
                    />

                    <BlackHr />
                  </InnerFormDiv>
                );
              })}
            </>
          </OptionsForm>
        </ParentDiv>
      ) : showCondimentsRadio ? (
        <ParentDiv>
          <CondimentsTitleAndRequiredInfo
            {...{ numberOfCondimentsAvailable }}
          />

          <Form className="no-margin-top">
            {condimentsDocuments.map((condiments) => {
              const { $id, name } = condiments;
              return (
                <InnerFormDiv key={$id}>
                  <Label className="no-padding">{name}</Label>
                  <input
                    type="radio"
                    name="singleCondimentChosen"
                    value={name}
                    onChange={handleOptionChange}
                  />

                  <BlackHr />
                </InnerFormDiv>
              );
            })}
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default Condiments;
