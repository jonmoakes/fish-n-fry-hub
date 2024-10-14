import Balancer from "react-wrap-balancer";

import useManageMenuLogic from "./hooks/use-manage-menu-logic";
import useConfirmUpdatePropertySwals from "./hooks/use-confirm-update-property-swals";

import { ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import { H2 } from "../../styles/h2/h2.styles";
import { BlackText } from "../../styles/p/p.styles";
import { BlueSpan, RedSpan } from "../../styles/span/span.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const UpdatePrice = ({
  propertyValue,
  title,
  attributeDescription,
  attributeKey,
}) => {
  const { newValue, handleAttributeChange, name, $collectionId, $id } =
    useManageMenuLogic();
  const { confirmUpdateProperty } = useConfirmUpdatePropertySwals();

  return (
    <>
      {propertyValue ? (
        <ParentDiv className="left">
          <H2>{title}</H2>
          <Form className="no-margin-top">
            <BlackText>
              current {attributeDescription}{" "}
              <RedSpan>£{(propertyValue / 100).toFixed(2)}</RedSpan>
            </BlackText>
            <BlackHr />

            <Label>new {attributeDescription}:</Label>

            <StyledInput
              onWheel={(e) => e.target.blur()}
              type="number"
              min={1}
              pattern="[1-9]*[.]?[1-9]+"
              inputMode="numeric"
              value={newValue || ""}
              placeholder="in pence - ie 100 for £1"
              onChange={handleAttributeChange}
            />

            {newValue ? (
              <>
                <BlackText>
                  <Balancer>
                    the new {attributeDescription} for this product will be{" "}
                    <BlueSpan>£{Number(newValue / 100).toFixed(2)}</BlueSpan>
                  </Balancer>
                </BlackText>

                <YellowGreenButton
                  type="button"
                  onClick={() =>
                    confirmUpdateProperty(
                      name,
                      attributeDescription,
                      newValue,
                      attributeKey,
                      $collectionId,
                      $id
                    )
                  }
                >
                  update {attributeDescription}
                </YellowGreenButton>
              </>
            ) : null}
          </Form>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default UpdatePrice;
