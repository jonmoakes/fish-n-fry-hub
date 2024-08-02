import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import SingleSize from "./single-size.component";
import MediumSize from "./medium-size.component";
import LargeSize from "./large-size.component";
import DoubleSize from "./double-size.component";
import TripleSize from "./triple-size.component";

import {
  ParentDiv,
  RadioDiv,
  RequiredDiv,
} from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";
import { H2 } from "../../../styles/h2/h2.styles";

const ChooseSize = () => {
  const {
    hasSizeOption,
    sizeOptionMediumPrice,
    sizeOptionLargePrice,
    sizeOptionDoublePrice,
    sizeOptionTriplePrice,
  } = useChooseOptionsVariables();
  const { handleRadioChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasSizeOption ? (
        <ParentDiv>
          <H2>choose size:</H2>

          <RequiredDiv>
            <RequiredSpan>required</RequiredSpan>
          </RequiredDiv>

          <Form className="no-margin-top">
            <RadioDiv>
              <SingleSize {...{ sizeOptionLargePrice, handleRadioChange }} />
              <MediumSize {...{ sizeOptionMediumPrice, handleRadioChange }} />
              <LargeSize {...{ sizeOptionLargePrice, handleRadioChange }} />
              <DoubleSize {...{ sizeOptionDoublePrice, handleRadioChange }} />
              <TripleSize {...{ sizeOptionTriplePrice, handleRadioChange }} />
            </RadioDiv>
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChooseSize;
