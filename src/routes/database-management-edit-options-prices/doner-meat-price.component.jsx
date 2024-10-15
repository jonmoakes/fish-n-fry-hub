import Balancer from "react-wrap-balancer";

import useConfirmUpdateOptionPrice from "./hooks/use-confirm-update-option-price";

import { ParentDiv } from "../../styles/div/div.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { BlackText, Text } from "../../styles/p/p.styles";
import { RedSpan, YellowShadowSpan } from "../../styles/span/span.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

const DonerMeatPrice = ({
  donerMeatPrice,
  newDonerMeatPrice,
  handleChange,
}) => {
  const { confirmUpdateOptionPrice } = useConfirmUpdateOptionPrice();

  const optionName = "doner meat";
  const newOptionPrice = newDonerMeatPrice;
  const attributeKey = "donerMeatPrice";

  return (
    <ParentDiv className="bottom-padding">
      <H2>doner meat price</H2>
      <BlackHr />
      <Text>
        <Balancer>
          doner meat price is currently{" "}
          <YellowShadowSpan>
            £{(donerMeatPrice / 100).toFixed(2)}
          </YellowShadowSpan>
        </Balancer>
      </Text>

      <Form className="no-margin">
        <Label>new doner meat price:</Label>
        <StyledInput
          onWheel={(e) => e.target.blur()}
          type="number"
          min={1}
          pattern="[1-9]*"
          inputMode="numeric"
          name="newDonerMeatPrice"
          value={newDonerMeatPrice || ""}
          placeholder="in pence"
          onChange={handleChange}
          required
        />
        {newDonerMeatPrice ? (
          <>
            <BlackText>
              <Balancer>
                the new doner meat price will be{" "}
                <RedSpan>£{(newDonerMeatPrice / 100).toFixed(2)}</RedSpan>
              </Balancer>
            </BlackText>
            <YellowGreenButton
              className="bounce-down"
              type="button"
              onClick={() =>
                confirmUpdateOptionPrice(
                  optionName,
                  newOptionPrice,
                  attributeKey
                )
              }
            >
              update price
            </YellowGreenButton>
          </>
        ) : null}
      </Form>
    </ParentDiv>
  );
};

export default DonerMeatPrice;
