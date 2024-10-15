import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../../styles/div/div.styles";
import { H2 } from "../../../styles/h2/h2.styles";
import { BlackText, Text } from "../../../styles/p/p.styles";
import { RedSpan, YellowShadowSpan } from "../../../styles/span/span.styles";
import { Form, Label, StyledInput } from "../../../styles/form/form.styles";
import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const GratedCheesePrice = ({
  gratedCheesePrice,
  newGratedCheesePrice,
  handleChange,
}) => (
  <ParentDiv className="bottom-padding">
    <H2>Grated Cheese price</H2>
    <BlackHr />
    <Text>
      <Balancer>
        Grated Cheese price is currently{" "}
        <YellowShadowSpan>
          £{(gratedCheesePrice / 100).toFixed(2)}
        </YellowShadowSpan>
      </Balancer>
    </Text>

    <Form className="no-margin">
      <Label>new Grated Cheese price:</Label>
      <StyledInput
        onWheel={(e) => e.target.blur()}
        type="number"
        min={1}
        pattern="[1-9]*"
        inputMode="numeric"
        name="newGratedCheesePrice"
        value={newGratedCheesePrice || ""}
        placeholder="in pence"
        onChange={handleChange}
        required
      />
      {newGratedCheesePrice ? (
        <>
          <BlackText>
            <Balancer>
              the new Grated Cheese price will be{" "}
              <RedSpan>£{(newGratedCheesePrice / 100).toFixed(2)}</RedSpan>
            </Balancer>
          </BlackText>
          <YellowGreenButton className="bounce-down">
            update price
          </YellowGreenButton>
        </>
      ) : null}
    </Form>
  </ParentDiv>
);

export default GratedCheesePrice;
