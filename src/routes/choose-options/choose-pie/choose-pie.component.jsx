import Balancer from "react-wrap-balancer";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import {
  ParentDiv,
  InnerFormDiv,
  RequiredDiv,
} from "../../../styles/div/div.styles";
import { Form, Label } from "../../../styles/form/form.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const ChoosePie = () => {
  const { hasChoosePieOption, piesDocuments } = useChooseOptionsVariables();
  const { handleRadioChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasChoosePieOption ? (
        <ParentDiv>
          <H2>
            <Balancer>choose pie</Balancer>
          </H2>

          <RequiredDiv>
            <RequiredSpan>required</RequiredSpan>
          </RequiredDiv>

          <Form className="no-margin-top">
            {piesDocuments.map((pie) => {
              const { $id, name } = pie;
              return (
                <InnerFormDiv key={$id}>
                  <>
                    <Label className="no-padding">{name}</Label>

                    <input
                      type="radio"
                      name="pieChoice"
                      value={name}
                      onChange={handleRadioChange}
                    />

                    <BlackHr />
                  </>
                </InnerFormDiv>
              );
            })}
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChoosePie;
