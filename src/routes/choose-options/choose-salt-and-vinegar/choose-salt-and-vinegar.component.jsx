import Balancer from "react-wrap-balancer";

import useChooseOptionsVariables from "../choose-options-hooks/use-choose-options-variables";
import useChooseOptionsFunctions from "../choose-options-hooks/use-choose-options-functions";

import BothSaltAndVinegar from "./both-salt-and-vinegar.component";
import JustSalt from "./just-salt.component";
import JustVinegar from "./just-vinegar.component";
import NoSaltOrVinegar from "./no-salt-or-vinegar.component";

import {
  ParentDiv,
  InnerFormDiv,
  RequiredDiv,
} from "../../../styles/div/div.styles";
import { Form } from "../../../styles/form/form.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";
import { H2 } from "../../../styles/h2/h2.styles";

const ChooseSaltAndVinegar = () => {
  const { hasSaltAndVinegarOption } = useChooseOptionsVariables();
  const { handleRadioChange } = useChooseOptionsFunctions();

  return (
    <>
      {hasSaltAndVinegarOption ? (
        <ParentDiv>
          <H2>
            <Balancer>salt & vinegar?</Balancer>
          </H2>

          <RequiredDiv>
            <RequiredSpan>required</RequiredSpan>
          </RequiredDiv>

          <Form className="no-margin-top">
            <InnerFormDiv>
              <BothSaltAndVinegar {...{ handleRadioChange }} />
              <JustSalt {...{ handleRadioChange }} />
              <JustVinegar {...{ handleRadioChange }} />
              <NoSaltOrVinegar {...{ handleRadioChange }} />
            </InnerFormDiv>
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ChooseSaltAndVinegar;
