import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseSaucesFunctions from "./sauces-hooks/use-choose-sauces-functions";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

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

const Sauces = () => {
  const { numberOfSaucesAvailable } = useChooseOptionsVariables();
  const {
    handleSaucesChange,
    saucesToRender,
    numberOfSaucesCheckboxesChosen,
    noSauceChecked,
    showSauceCheckboxes,
    showSauceRadio,
  } = useChooseSaucesFunctions();
  const { handleRadioChange } = useChooseOptionsFunctions();

  return (
    <>
      {showSauceCheckboxes ? (
        <ParentDiv>
          <SaucesTitleAndRequiredInfo {...{ numberOfSaucesAvailable }} />

          <ChooseSaucesInfo
            {...{ numberOfSaucesCheckboxesChosen, noSauceChecked }}
          />

          <OptionsForm onChange={handleSaucesChange}>
            {saucesToRender.map((sauce) => {
              const { $id, name } = sauce;

              return (
                <RadioDiv key={$id}>
                  <OptionsLabel>{name}</OptionsLabel>
                  <StyledCheckbox
                    className="multiple"
                    type="checkbox"
                    id={name}
                    name={name}
                  />

                  <BlackHr />
                </RadioDiv>
              );
            })}
          </OptionsForm>

          <MaximumSaucesError {...{ numberOfSaucesCheckboxesChosen }} />
        </ParentDiv>
      ) : showSauceRadio ? (
        <ParentDiv>
          <SaucesTitleAndRequiredInfo {...{ numberOfSaucesAvailable }} />

          <Form className="no-margin-top">
            {saucesToRender.map((sauce) => {
              const { $id, name } = sauce;
              return (
                <RadioDiv key={$id}>
                  <Label className="no-padding">{name}</Label>
                  <input
                    type="radio"
                    name="singleSauceChosen"
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
