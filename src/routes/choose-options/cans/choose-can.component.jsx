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

import { replacePartOfString } from "../../../functions/replace-part-of-string";

const ChooseCan = () => {
  const { hasChooseCanOption, canDocuments } = useChooseOptionsVariables();
  const { handleOptionChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasChooseCanOption ? (
        <ParentDiv>
          <H2>
            <Balancer>choose can:</Balancer>
          </H2>

          <RequiredDiv>
            <RequiredSpan>required</RequiredSpan>
          </RequiredDiv>

          <Form className="no-margin-top">
            {canDocuments.map((canDocument) => {
              const { $id, name } = canDocument;

              return (
                <InnerFormDiv key={$id}>
                  <Label className="no-padding">
                    {replacePartOfString(name, "( can )", "")}
                  </Label>

                  <input
                    type="radio"
                    name="canChoice"
                    value={name}
                    onChange={handleOptionChange}
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

export default ChooseCan;
