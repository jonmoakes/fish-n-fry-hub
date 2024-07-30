import { Fragment } from "react";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseSaucesFunctions from "./sauces-hooks/use-choose-sauces-functions";

import SaucesTitleAndRequiredInfo from "./sauces-title-and-required-info.component";
import ChooseSaucesInfo from "./choose-sauces-info.component";
import MaximumSaucesError from "./maximum-sauces-error.component";

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

const Sauces = () => {
  const { numberOfSaucesAvailable } = useChooseOptionsVariables();
  const {
    handleSaucesChange,
    saucesToRender,
    numberOfCheckboxesChosen,
    noSauceChecked,
    formatSauceName,
    showSauceCheckboxes,
    showSauceRadio,
  } = useChooseSaucesFunctions();
  const { handleRadioChange } = useChooseOptionsFunctions();

  return (
    <>
      {showSauceCheckboxes ? (
        <ParentDiv>
          <SaucesTitleAndRequiredInfo {...{ numberOfSaucesAvailable }} />

          <ChooseSaucesInfo {...{ numberOfCheckboxesChosen, noSauceChecked }} />

          <OptionsForm onChange={handleSaucesChange}>
            {saucesToRender.map((checkbox) => (
              <RadioDiv key={checkbox.id}>
                <OptionsLabel>{formatSauceName(checkbox.name)}</OptionsLabel>
                <StyledCheckbox
                  className="multiple"
                  type="checkbox"
                  id={checkbox.name}
                  name={checkbox.name}
                  checked={checkbox.checked}
                />

                <BlackHr />
              </RadioDiv>
            ))}
          </OptionsForm>

          <MaximumSaucesError {...{ numberOfCheckboxesChosen }} />
        </ParentDiv>
      ) : showSauceRadio ? (
        <ParentDiv>
          <SaucesTitleAndRequiredInfo {...{ numberOfSaucesAvailable }} />

          <Form className="no-margin-top">
            {saucesToRender.map((sauces) => {
              const { name } = sauces;
              return (
                <RadioDiv key={sauces.id}>
                  <Label className="no-padding">{formatSauceName(name)}</Label>
                  <input
                    type="radio"
                    name="sauceChosen"
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

export default Sauces;
