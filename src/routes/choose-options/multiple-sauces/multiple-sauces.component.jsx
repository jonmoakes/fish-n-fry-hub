import { Fragment } from "react";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseSaucesFunctions from "../choose-options-hooks/use-choose-sauces-functions";

import SaucesTitleAndRequiredInfo from "./sauces-title-and-required-info.component";
import ChooseSaucesInfo from "./choose-sauces-info.component";
import MaximumSaucesError from "./maximum-sauces-error.component";

import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import { OptionsForm, StyledCheckbox } from "../../../styles/form/form.styles";
import { OptionsLabel } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const MultipleSauces = () => {
  const { hasSaucesOption } = useChooseOptionsVariables();
  const {
    handleSaucesChange,
    saucesCheckboxesToRender,
    numberOfCheckboxesChosen,
    noSauceChecked,
  } = useChooseSaucesFunctions();

  return (
    <>
      {hasSaucesOption ? (
        <ParentDiv>
          <SaucesTitleAndRequiredInfo />

          <ChooseSaucesInfo {...{ numberOfCheckboxesChosen, noSauceChecked }} />

          <OptionsForm onChange={handleSaucesChange}>
            <RadioDiv>
              {saucesCheckboxesToRender.map((checkbox) => (
                <Fragment key={checkbox.id}>
                  <OptionsLabel>{checkbox.label}</OptionsLabel>
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

          <MaximumSaucesError {...{ numberOfCheckboxesChosen }} />
        </ParentDiv>
      ) : null}
    </>
  );
};

export default MultipleSauces;
