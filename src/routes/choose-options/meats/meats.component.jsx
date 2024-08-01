import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseMeatsFunctions from "./meats-hooks/use-choose-meats-functions";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import MeatsTitleAndRequiredInfo from "./meats-title-and-required-info.component";
import MaximumMeatsError from "./maximum-meats-error.component";

import { ParentDiv, RadioDiv } from "../../../styles/div/div.styles";
import {
  Form,
  Label,
  OptionsForm,
  StyledCheckbox,
} from "../../../styles/form/form.styles";
import { OptionsLabel } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Meats = () => {
  const { numberOfMeatsAvailable, meatsDocuments } =
    useChooseOptionsVariables();
  const {
    handleMeatsChange,
    numberOfMeatsCheckboxesChosen,
    showMeatsCheckboxes,
    showMeatsRadio,
  } = useChooseMeatsFunctions();
  const { handleRadioChange } = useChooseOptionsFunctions();

  return (
    <>
      {showMeatsCheckboxes ? (
        <ParentDiv>
          <MeatsTitleAndRequiredInfo {...{ numberOfMeatsAvailable }} />

          <OptionsForm onChange={handleMeatsChange}>
            {meatsDocuments.map((meat) => {
              const { $id, name } = meat;

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

          <MaximumMeatsError {...{ numberOfMeatsCheckboxesChosen }} />
        </ParentDiv>
      ) : showMeatsRadio ? (
        <ParentDiv>
          <MeatsTitleAndRequiredInfo {...{ numberOfMeatsAvailable }} />

          <Form className="no-margin-top">
            {meatsDocuments.map((sauce) => {
              const { $id, name } = sauce;
              return (
                <RadioDiv key={$id}>
                  <Label className="no-padding">{name}</Label>
                  <input
                    type="radio"
                    name="meatChosen"
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

export default Meats;
