import { Fragment } from "react";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseCondimentsFunctions from "./condiments-hooks/use-choose-condiments-functions";

import CondimentsTitleAndRequiredInfo from "./condiments-title-and-required-info.component";
import MaximumCondimentsError from "./maximum-condiments-error.component";

import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import {
  Form,
  Label,
  OptionsForm,
  StyledCheckbox,
} from "../../../styles/form/form.styles";
import { OptionsLabel } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import { condimentsList } from "./condiments-list";

const Condiments = () => {
  const { numberOfCondimentsAvailable } = useChooseOptionsVariables();
  const {
    numberOfCondimentsCheckboxesChosen,
    showCondimentsCheckboxes,
    showCondimentsRadio,
    handleCondimentsChange,
  } = useChooseCondimentsFunctions();
  const { handleRadioChange } = useChooseOptionsFunctions();

  return (
    <>
      {showCondimentsCheckboxes ? (
        <ParentDiv>
          <CondimentsTitleAndRequiredInfo
            {...{ numberOfCondimentsAvailable }}
          />

          <OptionsForm onChange={handleCondimentsChange}>
            <RadioDiv>
              {condimentsList.map((checkbox) => (
                <Fragment key={checkbox.id}>
                  <OptionsLabel>{checkbox.name}</OptionsLabel>
                  <StyledCheckbox
                    className="multiple"
                    type="checkbox"
                    id={checkbox.name}
                    name={checkbox.name}
                    checked={checkbox.checked}
                  />

                  <BlackHr />
                </Fragment>
              ))}
            </RadioDiv>
          </OptionsForm>

          <MaximumCondimentsError
            {...{
              numberOfCondimentsAvailable,
              numberOfCondimentsCheckboxesChosen,
            }}
          />
        </ParentDiv>
      ) : showCondimentsRadio ? (
        <ParentDiv>
          <CondimentsTitleAndRequiredInfo
            {...{ numberOfCondimentsAvailable }}
          />

          <Form className="no-margin-top">
            {condimentsList.map((condiments) => {
              const { id, name } = condiments;
              return (
                <RadioDiv key={id}>
                  <Label className="no-padding">{name}</Label>
                  <input
                    type="radio"
                    name="singleCondimentChosen"
                    value={name}
                    onChange={handleRadioChange}
                  />

                  <BlackHr />
                </RadioDiv>
              );
            })}
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default Condiments;
