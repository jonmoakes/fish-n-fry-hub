import Balancer from "react-wrap-balancer";

import { InnerFormDiv, RequiredDiv } from "../../../styles/div/div.styles";
import {
  Form,
  StyledCheckbox,
  StyledInput,
} from "../../../styles/form/form.styles";
import { OptionsLabel } from "../../../styles/p/p.styles";
import { RequiredSpan } from "../../../styles/span/span.styles";
import { BlackHr, HrWithMargin } from "../../../styles/hr/hr.styles";

const AttributesDataForm = ({
  attributes,
  productToAdd,
  handleChangeCheckbox,
  handleChange,
}) => (
  <>
    <BlackHr />
    <Form>
      {attributes.map((attribute) => {
        const { attributeName, displayName, required, inputType, placeholder } =
          attribute;

        return (
          <InnerFormDiv key={attributeName}>
            <OptionsLabel className="wrap">
              <Balancer>{displayName}</Balancer>
            </OptionsLabel>

            {required ? (
              <RequiredDiv>
                <RequiredSpan>required</RequiredSpan>
              </RequiredDiv>
            ) : null}

            {inputType === "checkbox" ? (
              <StyledCheckbox
                type={inputType}
                name={attributeName}
                checked={productToAdd[attributeName] || false}
                onChange={handleChangeCheckbox}
              />
            ) : (
              <StyledInput
                type={inputType}
                name={attributeName}
                value={productToAdd[attributeName] || ""}
                onChange={handleChange}
                onWheel={(e) => e.target.blur()}
                placeholder={placeholder}
              />
            )}

            <HrWithMargin />
          </InnerFormDiv>
        );
      })}
    </Form>
  </>
);

export default AttributesDataForm;
