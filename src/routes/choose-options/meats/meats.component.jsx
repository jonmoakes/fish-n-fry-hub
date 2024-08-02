import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseMeatsFunctions from "./meats-hooks/use-choose-meats-functions";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import MeatsTitleAndRequiredInfo from "./meats-title-and-required-info.component";
import MaximumMeatsError from "./maximum-meats-error.component";

import { ParentDiv, InnerFormDiv } from "../../../styles/div/div.styles";
import {
  Form,
  Label,
  OptionsForm,
  StyledCheckbox,
} from "../../../styles/form/form.styles";
import { OptionsLabel } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Meats = () => {
  const { numberOfMeatsAvailable } = useChooseOptionsVariables();
  const {
    handleMeatsChange,
    numberOfMeatsCheckboxesChosen,
    showMeatsCheckboxes,
    showMeatsRadio,
    meatsToRender,
  } = useChooseMeatsFunctions();
  const { handleRadioChange } = useChooseOptionsFunctions();

  return (
    <>
      {showMeatsCheckboxes ? (
        <ParentDiv>
          <MeatsTitleAndRequiredInfo {...{ numberOfMeatsAvailable }} />

          <OptionsForm onChange={handleMeatsChange}>
            {meatsToRender.map((meat) => {
              const { $id, name } = meat;

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
          </OptionsForm>

          <MaximumMeatsError
            {...{ numberOfMeatsAvailable, numberOfMeatsCheckboxesChosen }}
          />
        </ParentDiv>
      ) : showMeatsRadio ? (
        <ParentDiv>
          <MeatsTitleAndRequiredInfo {...{ numberOfMeatsAvailable }} />

          <Form className="no-margin-top">
            {meatsToRender.map((meat) => {
              const { $id, name } = meat;
              return (
                <InnerFormDiv key={$id}>
                  <Label className="no-padding">{name}</Label>
                  <input
                    type="radio"
                    name="  singleMeatChosen"
                    value={name}
                    onChange={handleRadioChange}
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

export default Meats;
