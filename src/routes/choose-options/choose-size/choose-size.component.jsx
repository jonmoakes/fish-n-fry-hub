import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import SingleSize from "./single-size.component";
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
  const { sizeOptionDoublePrice, sizeOptionTriplePrice } =
    useChooseOptionsVariables();
  const { handleSizeChange } = useChooseOptionsFunctions();

  return (
    <ParentDiv>
      <H2>choose size:</H2>

      <RequiredDiv>
        <RequiredSpan>required</RequiredSpan>
      </RequiredDiv>

      <Form className="no-margin-top">
        <RadioDiv>
          <SingleSize {...{ handleSizeChange }} />
          <DoubleSize {...{ sizeOptionDoublePrice, handleSizeChange }} />
          <TripleSize {...{ sizeOptionTriplePrice, handleSizeChange }} />
        </RadioDiv>
      </Form>
    </ParentDiv>
  );
};

export default ChooseSize;
