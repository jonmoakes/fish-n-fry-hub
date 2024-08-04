import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import SingleSize from "./single-size.component";
import MediumSize from "./medium-size.component";
import LargeSize from "./large-size.component";
import DoubleSize from "./double-size.component";
import TripleSize from "./triple-size.component";

import {
  ParentDiv,
  InnerFormDiv,
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
  const { handleOptionChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasSizeOption ? (
        <ParentDiv>
          <H2>choose size:</H2>

          <RequiredDiv>
            <RequiredSpan>required</RequiredSpan>
          </RequiredDiv>

          <Form className="no-margin-top">
            <InnerFormDiv>
              <SingleSize {...{ sizeOptionLargePrice, handleOptionChange }} />
              <MediumSize {...{ sizeOptionMediumPrice, handleOptionChange }} />
              <LargeSize {...{ sizeOptionLargePrice, handleOptionChange }} />
              <DoubleSize {...{ sizeOptionDoublePrice, handleOptionChange }} />
              <TripleSize {...{ sizeOptionTriplePrice, handleOptionChange }} />
            </InnerFormDiv>
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChooseSize;
